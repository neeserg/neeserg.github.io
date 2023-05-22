---
layout: post
title:  "Simple Mandelbrot Set in Rust"
date:   2023-05-23 00:22:04 +1000
categories: Brainstorms
usemathjax: true

---

A fractal is an awesome mathematical entity. Its characterized by its self-similarity and having an infinite circumference with a finite area.  There are many interesting fractals, Sierpiński triangle, Koch Snowflake, Julia set and the one that will be the subject of this blog, the Mandelbrot Set. 

## Definition Of Mandelbrot Set.

Most of you will have seen the picture of the Mandelbrot set. A colorful picture that is infinitely zoomable and is weirdly psychedelic.

<img src="/assets/mandlebrot.jpg" alt="Mandelbrot Set " width=200 height=200> *I generated this one through Python, just a basic picture.*

So what are we looking at? Yeah, it looks kinda interesting but, lots of things look interesting. What even is it? Firstly the Mandelbrot set lives in the complex plane. Just to give a brief overview of complex numbers in a few dot points
- It involves taking the square root of negative numbers or there is  a number $$ i: i^2 =-1$$
- You can add or subtract $$ i $$ to any other real number/complex number and you will get a complex number, so  $$ 2+i $$ and $$ 3-4i $$ are both complex numbers.
- You can multiply $$ i $$ with any other real/complex number, and you will get a complex number.
- You can create a x-y cartesian graph to represent complex numbers such that any number that is like $$ x+ yi $$ can be shown in a 2-d graph.


<img src="https://www.mathsisfun.com/algebra/images/complex-plane.svg" alt="Mandelbrot Set " width=200 height=200> <em>This is how the mandelbrot set is drawn in the 2d plane.</em>
- It is super duper useful and is used in signal processing, quantum mechanics, electronics and all sorts of cool stuff.

Back to the mandelbrot set. We have established the fact that complex numbers are super cool, and mandelbrot set by association also happens to be pretty cool. Actually, the most fascinating thing about the Mandelbrot set is the fact that this weird picture can be described quite elegantly by the following set of rules/equations.

If $$ Z_{n+1}= Z_{n}^2 +C $$ 

then the **Mandlebrot set** is the set of $$ C $$s such that for all $$n$$ 

$$  \| Z_{n} \| < 2 $$ and $$Z_{0} = 0 $$.

It is actually this simple! This simplicity is why I decided to do this as my first blog. I just wanted to just get something done and posted, and now here it is.

## My First Go Around in Python

The first algorithm, (actually it was my second if we are going in a sequential approach, I used the numpy version for my first attempt; sort of a no-brainer), involved doing things purely in python. I used numpy to set up some stuff, but I iterated over each of the $$10,000\times 10,000$$ points in a for loop and validated the membership of the point if it remained inside the circle of convergence $$\| Z \| <2$$ after 100 iterations.

{% highlight python %}
    def make_image(image_array):
        image_array = image_array/NUM_ITER
        colormap = plt.get_cmap('magma')
        colors = np.uint8(colormap(image_array)*255)
        image = Image.fromarray(colors)
        with open('mandlebrot.png','wb')as f:
            image.save(f,format='png')
    
    
    image_array = np.zeros((DIMENSION,DIMENSION))
    image_array = image_array+NUM_ITER
    x = np.linspace(lower_real,upper_real,DIMENSION)
    x = np.tile(x,(DIMENSION,1))
    y = 1j*np.linspace(lower_imgaginary,upper_imaginary,DIMENSION)
    y = np.tile(y,(DIMENSION,1)).T
    c = x+y

    for i in range(DIMENSION):
        for j in range(DIMENSION):
            complex_const = c[i][j]
            z_k = 0j+0
            for k in range(NUM_ITER):
                z_k = z_k*z_k +complex_const
                if np.abs(z_k)>2:
                    image_array[i][j] = k
                    break
    
    make_image(image_array=image_array)

{% endhighlight %}

So I planned to run this five times and get the average result, but it took too long to finish. So I just did it once. It finished at 10 minutes and 18 seconds. 

{% highlight shell_session %}
Trial number 0 finishes in: 10.0 minutes 17.687544000000003 seconds
{% endhighlight %}
### numpy way

A better way in Python was needed. Well just don't use python, use C masquerading as Python instead. I decided to take some of the heavy lifting away from pure python and use numpy to do it instead. But I needed to be smart about it. I just element-wise multiplied the $$10,000 \times 10,000$$ and created a parallel array for storing the iterations. I selected the values of the complex array which exceeded the threshold magnitude of 2 and spliced array indexing based on those values to change the values on the iteration array to the number of iterations it took for the point to escape. The code bellow is what I came up with:

{% highlight python %}
    ##created a evenly space array of size DIMENSION
    x = np.linspace(lower_real,upper_real,DIMENSION) 
    ## tile it so it forms DIMENSION*DIMENSION array
    x = np.tile(x,(DIMENSION,1))
    ## Do the same for complex values
    y = 1j*np.linspace(lower_imgaginary,upper_imaginary,DIMENSION)
    y = np.tile(y,(DIMENSION,1)).T
    ## starting values
    c = x+y
    ## reshape so its easier to splice
    c = c.reshape(DIMENSION*DIMENSION)
    z = 0j*np.zeros(DIMENSION*DIMENSION)

    ## mask of the array used for splicing
    mask = np.arange(DIMENSION*DIMENSION)
    image_array = np.zeros(DIMENSION*DIMENSION)
    image_array = image_array+NUM_ITER

    for i in range(0,NUM_ITER):
        z= z**2 + c
        magnitude = np.abs(z)
        ## selecting the mask that corresponds to escaped points
        out_of_set = mask[magnitude>=2]
        image_array[out_of_set] = i
        ## get rid of the points so we are not iterating over it.
        mask = mask[magnitude<2]
        z = z[magnitude<2]
        c = c[magnitude<2]
    image_array = image_array.reshape((DIMENSION,DIMENSION))
    make_image(image_array=image_array)

{% endhighlight %}


So we have the results bellow.
{% highlight shell_session %}
Trial number 0 finishes in: 0.0 minutes 31.953124 seconds
Trial number 1 finishes in: 0.0 minutes 33.273252 seconds
Trial number 2 finishes in: 0.0 minutes 33.357185 seconds
Trial number 3 finishes in: 0.0 minutes 33.916994 seconds
Trial number 4 finishes in: 0.0 minutes 33.658781 seconds
Total time elapsed is: 2.0 minutes and 46.15983399999999 seconds
Average seconds is: 0.0 minutes and 33.231966799999995 seconds
{% endhighlight %}

As we can see, the improvement was quite substantial. 1870% improvement over the first way. Looks like python is pretty slow unless you use it as a wrapper for C; who knew? But there is a price for all those splicing going on there. Maybe I can just use a faster language.



## Rust, What's the hype man?

I hear so many good things about Rust. The most loved programming language, speeds that are comparable to C/C++, memory management at compile time, yada yada. But I never tried it. I suppose its time for me to try it. So they have a handy book online [The Rust Programming Language](https://doc.rust-lang.org/book/title-page.html#the-rust-programming-language). I skimmed over the book just to get an idea about the language. I didn't really want to spend a lot of time reading about the language, learning by doing is the idea for this blog after all.

Some cool features that were pretty cool and I would like to implement in my code were:
- Enums: Their enums system is pretty sophisticated, I think I will find a way to use it.
- Cargo: Straight out of the box package management system.
- Operator overloading: Needed for making complex calcs easier
- Borrow Checkers and ownership: very similar to C++ smart pointers I guess.
- Lifetimes: I think this what is so special about rust, but wasn't able to use it explicitly in this project

## Rust implementation

First thing is first I needed to implement a ``Complex`` struct that had the usual operators of +, * and magnitude. This was pretty simple to do. But I realized I had to implement it for the reference of ``&Complex`` class instead of the actual class, because of the borrow checker. I implemented the code bellow.

{%highlight rust%}
struct Complex{
    x: f64,
    y:f64
}

impl Complex {

    fn square(&self) -> f64 {
        self.x*self.x +self. y*self.y
    }
//operator overloading
impl ops::Add for &Complex {
    type Output = Complex;

    fn add(self, other: &Complex) -> Complex {
        Complex { x: self.x + other.x, y: self.y + other.y }
    }
}

impl ops::Mul for &Complex {
    type Output = Complex;

    fn mul(self, other: &Complex) -> Complex {
        Complex { x: self.x*other.x - self.y*other.y, y: 2.0*(self.y*self.x )}
    }
}

}
{% endhighlight %}

Ok now for the algorithm, I decided to go for an enum approach, just to play with the feature. I created an enum as follows.

{%highlight rust%}
    enum MandleBrotPoint {
        Point{ z: Complex,
            iterations:i16,
            c:Complex
        },
        Color{
            color:(u8,u8,u8,u8),
        }
    }

    impl  MandleBrotPoint
        {
            fn next_point(self) -> MandleBrotPoint{
                match self {
                    MandleBrotPoint::Point{z,
                        iterations,c} =>{
                        
                        
                        let new_z: Complex = &z*&z + &c;
                        let iterations: i16 = iterations+1;
                        let magnitude: f64 = new_z.square();
                        
                        if  magnitude >4.0 {
                            return  MandleBrotPoint::Color { color: color_map(iterations)};
                        }
                        else if iterations >= MAX_ITER as i16 {
                            return  MandleBrotPoint::Color { color: color_map(iterations)};
                        }
                        else {
                            return MandleBrotPoint::Point { z: new_z, 
                                iterations: iterations, c: c};
                        }
                    }
                    MandleBrotPoint::Color{..}=>{
                        return  self;
                    }
                }
            }
        }
{% endhighlight %}

In this enum structure, the complex point can either be a complex point or if it meets the criteria it becomes a color. This way I can iterate through the mandlebrot point till it turns into a color. Then the final part is simple, It is just the carbon copy of my original python implementation. Here it is for completeness.

{%highlight rust%}
    fn mandlebrot_algrithm(){
        let mut pixels: Vec<u8> = vec![0; SIZE_X*SIZE_Y*RGBA];
        for i in 0..SIZE_X{
            for j in 0..SIZE_Y{
                //just converts i,j to complex number wrapped in enum.
                let mut mandle_brot = get_mandlebrot_point(i,j);
                loop {
                    match mandle_brot{
                        MandleBrotPoint::Point {..}=>{
                            mandle_brot = mandle_brot.next_point();
                        }
                        MandleBrotPoint::Color { color}=>{
                            let (r,g,b,a) = color;
                            pixels[j*(RGBA*SIZE_X) + RGBA*i ] = r ;
                            pixels[j*(RGBA*SIZE_X) + RGBA*i +1] = g ;
                            pixels[j*(RGBA*SIZE_X) + RGBA*i +2] = b ;
                            pixels[j*(RGBA*SIZE_X) + RGBA*i +3] = a ;
                            break;
                        }
                    }

                }

            }
        }
        save_image(pixels);

    }

{% endhighlight %}

Now for the results, how much does it improve upon my python implementation? 

{% highlight shell_session %}
Trial number 0 finishes in: 0 minutes 4.224174 seconds
Trial number 1 finishes in: 0 minutes 4.3984823 seconds
Trial number 2 finishes in: 0 minutes 4.1937866 seconds
Trial number 3 finishes in: 0 minutes 4.2251234 seconds
Trial number 4 finishes in: 0 minutes 4.207141 seconds
Total time elapsed is: 0 minutes 21.248816 seconds
Average seconds is: is: 0 minutes 4.249763 seconds
{% endhighlight %}

Ok, that is pretty good, the implementation had an average running time of 4.2 seconds. 14700% improvement over the dumb python way and 700% improvement over the numpy way. Of course, there are probably improvements over this code. But thats for part 2 sometime in the future. For now here is the image generated by the rust code.
<img src="/assets/mandlebrot_rust.jpg" alt="Mandelbrot Set "> *The color map was just set to black and white since I didn't want to code up a complex color map. *
## Future

This was pretty fun. I might come back to this later when I feel like exploring this further.
- Further performance improvement. Parallelization.
- More Interactable, maybe a video if I get it decently fast.
- Maybe exploring its innate structure.

I think its time for me to move on to the next topic now. I think my next topic will be something machine learning related. I really had fun with rust, I definitely need to explore this language further. I will definitely be reading and working through the [The Rust Programming Language](https://doc.rust-lang.org/book/title-page.html#the-rust-programming-language).