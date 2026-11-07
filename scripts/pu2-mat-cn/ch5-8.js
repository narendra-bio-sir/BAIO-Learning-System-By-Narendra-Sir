/* Chapters 5–8 */
PAGES.push(
/* ---------- CH 5 ---------- */
{ch:5,title:'<span>Continuity</span>',pill:'Chapter 5 · Continuity at a point · Algebra of continuous functions',boxes:[
 {c:'g',full:true,h:'Continuity at a point',x:R`<p>$f$ is <b>continuous at $x=c$</b> if</p>
   <div class="fx">$\displaystyle\lim_{x\to c^-}f(x)=\lim_{x\to c^+}f(x)=f(c)$ &nbsp;&nbsp; i.e. &nbsp; <b>LHL = RHL = value</b></div>
   <p>$f$ is continuous if it is continuous at <b>every point of its domain</b>. A point where $f$ is not continuous is a <b>point of discontinuity</b>.</p>
   <p class="note tip">LHL: put $x=c-h$, RHL: put $x=c+h$, and let $h\to0$.</p>`},
 {c:'b',h:'Always continuous',x:R`<ul><li>Constant, identity, polynomial functions</li><li>$\sin x,\ \cos x$, $e^x$, $|x|$ — everywhere</li><li>$\log x$ for $x>0$</li><li>Rational function $\frac{p(x)}{q(x)}$ wherever $q(x)\ne0$</li><li>$\tan x$ except odd multiples of $\frac{\pi}{2}$</li></ul>`},
 {c:'o',h:'Algebra of continuous functions',x:R`<p>If $f,g$ are continuous at $c$, so are:</p>
   <div class="fx">$f\pm g$, &nbsp; $f\cdot g$, &nbsp; $\dfrac{f}{g}\ (g(c)\ne0)$</div>
   <p>The <b>composition</b> of continuous functions is continuous: $\sin(x^2)$, $|\cos x|$, $e^{\sin x}$.</p>`},
 {c:'p',full:true,h:'Points of discontinuity — classic cases',x:R`<table><tr><th>Function</th><th>Discontinuous at</th></tr>
   <tr><td>Greatest integer $[x]$</td><td>every integer</td></tr>
   <tr><td>Signum function</td><td>$x=0$</td></tr>
   <tr><td>$\dfrac{1}{x}$, $\dfrac{1}{x-a}$</td><td>not defined at $0$, $a$ — but continuous on its domain</td></tr>
   <tr><td>Piecewise function</td><td>check only at the joining points</td></tr></table>`},
 {c:'t',full:true,h:'Solved idea — find k',x:R`<p>$f(x)=\begin{cases}kx+1, & x\le5\\ 3x-5, & x>5\end{cases}$ is continuous at $x=5$. Find $k$.</p>
   <div class="fx">LHL $=f(5)=5k+1$, &nbsp; RHL $=15-5=10$ &nbsp;⇒&nbsp; $5k+1=10$ &nbsp;⇒&nbsp; $k=\tfrac{9}{5}$</div>`}
]},
{ch:5,title:'Differentiability &amp; <span>Rules</span>',pill:'Chapter 5 · Derivative · Chain rule · Standard derivatives',boxes:[
 {c:'g',full:true,h:'Differentiability',x:R`<div class="two"><div><p>$f$ is <b>differentiable at $c$</b> if LHD = RHD:</p>
   <div class="fx">$\displaystyle\lim_{h\to0^-}\frac{f(c+h)-f(c)}{h}=\lim_{h\to0^+}\frac{f(c+h)-f(c)}{h}$</div></div>
   <div><ul><li><span class="hl">Differentiable ⇒ continuous</span>.</li><li>Continuous does <b>not</b> mean differentiable: $|x|$ is continuous at 0 but LHD $=-1$, RHD $=1$.</li><li>Graph test: a sharp corner = not differentiable there.</li></ul></div></div>`},
 {c:'b',full:true,h:'Standard derivatives',x:R`<div class="three">
   <div class="fx k">$\frac{d}{dx}x^n=nx^{n-1}$</div><div class="fx k">$\frac{d}{dx}\sin x=\cos x$</div><div class="fx k">$\frac{d}{dx}\cos x=-\sin x$</div>
   <div class="fx k">$\frac{d}{dx}\tan x=\sec^2x$</div><div class="fx k">$\frac{d}{dx}\cot x=-\csc^2x$</div><div class="fx k">$\frac{d}{dx}\sec x=\sec x\tan x$</div>
   <div class="fx k">$\frac{d}{dx}\csc x=-\csc x\cot x$</div><div class="fx k">$\frac{d}{dx}e^x=e^x$</div><div class="fx k">$\frac{d}{dx}\log x=\frac1x$</div>
   <div class="fx k">$\frac{d}{dx}a^x=a^x\log a$</div><div class="fx k">$\frac{d}{dx}\sin^{-1}x=\frac{1}{\sqrt{1-x^2}}$</div><div class="fx k">$\frac{d}{dx}\cos^{-1}x=\frac{-1}{\sqrt{1-x^2}}$</div>
   <div class="fx k">$\frac{d}{dx}\tan^{-1}x=\frac{1}{1+x^2}$</div><div class="fx k">$\frac{d}{dx}\cot^{-1}x=\frac{-1}{1+x^2}$</div><div class="fx k">$\frac{d}{dx}\sec^{-1}x=\frac{1}{|x|\sqrt{x^2-1}}$</div></div>`},
 {c:'o',h:'Rules',x:R`<div class="fx">$(uv)'=uv'+vu'$</div><div class="fx">$\left(\dfrac uv\right)'=\dfrac{vu'-uv'}{v^2}$</div>
   <div class="fx"><b>Chain rule:</b> $\dfrac{dy}{dx}=\dfrac{dy}{dt}\cdot\dfrac{dt}{dx}$</div>`},
 {c:'p',h:'Implicit functions',x:R`<p>When $y$ is not separated (e.g. $x^2+y^2=25$), differentiate both sides w.r.t. $x$, writing $\frac{d}{dx}(y^n)=ny^{n-1}\frac{dy}{dx}$, then collect $\frac{dy}{dx}$.</p>
   <div class="fx">$x^2+y^2=25\ \Rightarrow\ 2x+2y\frac{dy}{dx}=0\ \Rightarrow\ \frac{dy}{dx}=-\frac{x}{y}$</div>`},
 {c:'r',full:true,h:'Inverse trig — substitution trick',x:R`<p>Simplify first, then differentiate:</p>
   <div class="two"><div class="fx">$y=\sin^{-1}\!\dfrac{2x}{1+x^2}$, put $x=\tan\theta$ ⇒ $y=2\tan^{-1}x$, $\ y'=\dfrac{2}{1+x^2}$</div>
   <div class="fx">$y=\cos^{-1}(4x^3-3x)$, put $x=\cos\theta$ ⇒ $y=3\cos^{-1}x$, $\ y'=\dfrac{-3}{\sqrt{1-x^2}}$</div></div>`}
]},
{ch:5,title:'Log, Parametric &amp; <span>Second Order</span>',pill:'Chapter 5 · Exponential and log · Logarithmic differentiation · Parametric · d²y/dx²',boxes:[
 {c:'g',h:'Logarithm laws',x:R`<div class="fx">$\log(ab)=\log a+\log b$</div><div class="fx">$\log\dfrac ab=\log a-\log b$</div><div class="fx">$\log a^n=n\log a$</div><div class="fx">$\log_a b=\dfrac{\log b}{\log a}$, &nbsp; $e^{\log x}=x$</div>`},
 {c:'b',h:'Logarithmic differentiation',x:R`<p>Use when the function is $[u(x)]^{v(x)}$ or a big product/quotient.</p>
   <ol style="padding-left:4mm"><li>Take log on both sides.</li><li>Differentiate implicitly.</li><li>Multiply by $y$.</li></ol>
   <div class="fx">$y=x^x$: $\log y=x\log x$ ⇒ $\frac{dy}{dx}=x^x(1+\log x)$</div>`},
 {c:'o',full:true,h:'Sum of two power-type terms',x:R`<p>For $y=x^{\sin x}+(\sin x)^x$, put $u=x^{\sin x}$, $v=(\sin x)^x$ and find $\frac{du}{dx},\frac{dv}{dx}$ separately:</p>
   <div class="fx">$\dfrac{dy}{dx}=x^{\sin x}\left(\cos x\log x+\dfrac{\sin x}{x}\right)+(\sin x)^x\big(\log\sin x+x\cot x\big)$</div>
   <p class="note trap">Never take log of a <b>sum</b> directly — $\log(u+v)\ne\log u+\log v$.</p>`},
 {c:'p',h:'Parametric functions',x:R`<p>If $x=f(t),\ y=g(t)$:</p>
   <div class="fx">$\dfrac{dy}{dx}=\dfrac{dy/dt}{dx/dt}$</div>
   <div class="fx l">$x=a\cos\theta,\ y=a\sin\theta$ ⇒ $\frac{dy}{dx}=\frac{a\cos\theta}{-a\sin\theta}=-\cot\theta$</div>`},
 {c:'t',h:'Second order derivative',x:R`<div class="fx">$\dfrac{d^2y}{dx^2}=\dfrac{d}{dx}\left(\dfrac{dy}{dx}\right)$, also written $y''$ or $y_2$</div>
   <p>Typical board question: show that $y=A\cos x+B\sin x$ satisfies $y''+y=0$.</p>
   <div class="fx">$y'=-A\sin x+B\cos x,\ \ y''=-y$ ✓</div>`},
 {c:'r',full:true,h:'Exam checklist for this chapter',x:R`<div class="three"><div class="fx l">✔ Continuity of piecewise function — find $k$ (3–5 marks)</div><div class="fx l">✔ Logarithmic differentiation of $x^x$ type (3 marks)</div><div class="fx l">✔ Parametric and second derivative proofs (2–3 marks)</div></div>`}
]},
/* ---------- CH 6 ---------- */
{ch:6,title:'Application of <span>Derivatives</span>',pill:'Chapter 6 · Rate of change · Increasing and decreasing functions',boxes:[
 {c:'g',full:true,h:'Rate of change',x:R`<p>$\dfrac{dy}{dx}$ is the rate of change of $y$ with respect to $x$. If both depend on time $t$: $\dfrac{dy}{dt}=\dfrac{dy}{dx}\cdot\dfrac{dx}{dt}$.</p>
   <div class="three"><div class="fx">Circle: $A=\pi r^2$, $\frac{dA}{dt}=2\pi r\frac{dr}{dt}$</div><div class="fx">Sphere: $V=\frac43\pi r^3$, $\frac{dV}{dt}=4\pi r^2\frac{dr}{dt}$</div><div class="fx">Cube: $V=x^3$, $S=6x^2$</div></div>
   <p class="note tip"><b>Marginal cost</b> $=\frac{dC}{dx}$ and <b>marginal revenue</b> $=\frac{dR}{dx}$ — the rate of change with respect to the number of units.</p>`},
 {c:'b',full:true,h:'Increasing and decreasing functions',x:R`<table><tr><th>If on an interval…</th><th>then $f$ is…</th></tr>
   <tr><td>$f'(x)>0$</td><td><b>strictly increasing</b></td></tr>
   <tr><td>$f'(x)<0$</td><td><b>strictly decreasing</b></td></tr>
   <tr><td>$f'(x)=0$</td><td>constant</td></tr></table>
   <p>Steps: find $f'(x)$ → solve $f'(x)=0$ (critical points) → split the line into intervals → check the sign of $f'$ in each.</p>`},
 {c:'o',h:'Solved idea',x:R`<p>$f(x)=2x^3-3x^2-36x+7$</p>
   <div class="fx">$f'(x)=6(x-3)(x+2)$</div>
   <ul><li>$(-\infty,-2)$: $f'>0$ → increasing</li><li>$(-2,3)$: $f'<0$ → decreasing</li><li>$(3,\infty)$: $f'>0$ → increasing</li></ul>`},
 {c:'p',h:'Quick facts',x:R`<ul><li>$e^x$, $\log x$, $x^3$: increasing on their domains.</li><li>$\sin x$ increases on $\left(0,\frac{\pi}{2}\right)$, decreases on $\left(\frac{\pi}{2},\pi\right)$.</li><li>$f(x)=ax+b$ increases if $a>0$.</li><li>A strictly monotonic function is one-one.</li></ul>`}
]},
{ch:6,title:'Maxima &amp; <span>Minima</span>',pill:'Chapter 6 · Local max and min · First and second derivative tests · Absolute max and min',boxes:[
 {c:'g',full:true,h:'Critical points and the tests',x:R`<p>A <b>critical point</b> $c$ is where $f'(c)=0$ or $f'(c)$ does not exist.</p>
   <div class="two"><div class="fx l"><b>First derivative test</b><br>$f'$ changes $+\to-$ at $c$: <b>local maximum</b><br>$f'$ changes $-\to+$: <b>local minimum</b><br>no sign change: point of inflection</div>
   <div class="fx l"><b>Second derivative test</b> (at $f'(c)=0$)<br>$f''(c)<0$: <b>local maximum</b><br>$f''(c)>0$: <b>local minimum</b><br>$f''(c)=0$: test fails — use the first test</div></div>`},
 {c:'b',h:'Absolute max / min on [a, b]',x:R`<ol style="padding-left:4mm"><li>Find all critical points in $(a,b)$.</li><li>Evaluate $f$ at these points and at the end points $a,b$.</li><li>Largest value = absolute max, smallest = absolute min.</li></ol>`},
 {c:'o',h:'Word problem method',x:R`<ol style="padding-left:4mm"><li>Name the quantity to optimise (area, volume, cost).</li><li>Use the condition to write it in <b>one variable</b>.</li><li>Differentiate, set $=0$, use $f''$ to confirm.</li></ol>`},
 {c:'p',full:true,h:'Standard results worth remembering',x:R`<div class="two"><div class="fx l">Of all rectangles with a given perimeter, the <b>square</b> has the maximum area.</div><div class="fx l">Two positive numbers with a fixed sum have the maximum product when they are <b>equal</b>.</div>
   <div class="fx l">Open box from a square sheet of side $a$: cut squares of side $\frac{a}{6}$ for maximum volume.</div><div class="fx l">Right circular cylinder of given surface area has maximum volume when height = diameter.</div></div>`},
 {c:'t',full:true,h:'Solved idea',x:R`<p>Find two positive numbers whose sum is 15 and the sum of whose squares is minimum.</p>
   <div class="fx">$S=x^2+(15-x)^2$, &nbsp; $S'=2x-2(15-x)=0\Rightarrow x=\tfrac{15}{2}$, &nbsp; $S''=4>0$ ⇒ minimum. Numbers: $\tfrac{15}{2},\tfrac{15}{2}$</div>`}
]},
/* ---------- CH 7 ---------- */
{ch:7,title:'Integrals — <span>Standard Forms</span>',pill:'Chapter 7 · Integration as anti-derivative · Standard integrals',boxes:[
 {c:'g',full:true,h:'Indefinite integral',x:R`<p>If $\frac{d}{dx}F(x)=f(x)$ then $\displaystyle\int f(x)\,dx=F(x)+C$. $C$ = constant of integration.</p>
   <div class="three"><div class="fx">$\int k f\,dx=k\int f\,dx$</div><div class="fx">$\int(f\pm g)\,dx=\int f\pm\int g$</div><div class="fx">$\frac{d}{dx}\int f\,dx=f(x)$</div></div>`},
 {c:'b',full:true,h:'Standard integrals',x:R`<div class="three">
   <div class="fx">$\int x^n dx=\frac{x^{n+1}}{n+1}+C\ (n\ne-1)$</div><div class="fx">$\int \frac1x dx=\log|x|+C$</div><div class="fx">$\int e^x dx=e^x+C$</div>
   <div class="fx">$\int a^x dx=\frac{a^x}{\log a}+C$</div><div class="fx">$\int\sin x\,dx=-\cos x+C$</div><div class="fx">$\int\cos x\,dx=\sin x+C$</div>
   <div class="fx">$\int\sec^2x\,dx=\tan x+C$</div><div class="fx">$\int\csc^2x\,dx=-\cot x+C$</div><div class="fx">$\int\sec x\tan x\,dx=\sec x+C$</div>
   <div class="fx">$\int\csc x\cot x\,dx=-\csc x+C$</div><div class="fx">$\int\tan x\,dx=\log|\sec x|+C$</div><div class="fx">$\int\cot x\,dx=\log|\sin x|+C$</div>
   <div class="fx">$\int\sec x\,dx=\log|\sec x+\tan x|+C$</div><div class="fx">$\int\csc x\,dx=\log|\csc x-\cot x|+C$</div><div class="fx">$\int\frac{dx}{\sqrt{1-x^2}}=\sin^{-1}x+C$</div>
   <div class="fx">$\int\frac{dx}{1+x^2}=\tan^{-1}x+C$</div><div class="fx">$\int\frac{dx}{x\sqrt{x^2-1}}=\sec^{-1}x+C$</div><div class="fx">$\int\frac{f'(x)}{f(x)}dx=\log|f(x)|+C$</div></div>`},
 {c:'o',full:true,h:'Trig identities that unlock integrals',x:R`<div class="two"><div class="fx">$\sin^2x=\frac{1-\cos2x}{2}$</div><div class="fx">$\cos^2x=\frac{1+\cos2x}{2}$</div><div class="fx">$\sin^3x=\frac{3\sin x-\sin3x}{4}$</div>
   <div class="fx">$2\sin A\cos B=\sin(A+B)+\sin(A-B)$</div><div class="fx">$2\cos A\cos B=\cos(A+B)+\cos(A-B)$</div><div class="fx">$2\sin A\sin B=\cos(A-B)-\cos(A+B)$</div></div>`}
]},
{ch:7,title:'Methods of <span>Integration</span>',pill:'Chapter 7 · Substitution · Special integrals · Partial fractions · By parts',boxes:[
 {c:'g',h:'Substitution',x:R`<p>Spot a function and its derivative: put $t=g(x)$, $dt=g'(x)dx$.</p>
   <div class="fx">$\int 2x\sin(x^2)dx$, $t=x^2$ ⇒ $-\cos(x^2)+C$</div>
   <div class="fx">$\int\frac{(\log x)^2}{x}dx=\frac{(\log x)^3}{3}+C$</div>`},
 {c:'b',h:'Integration by parts',x:R`<div class="fx">$\int u\,v\,dx=u\int v\,dx-\int\left(u'\int v\,dx\right)dx$</div>
   <p>Choose $u$ by <span class="hl">ILATE</span>: Inverse trig, Log, Algebraic, Trig, Exponential.</p>
   <div class="fx">$\int e^x[f(x)+f'(x)]dx=e^xf(x)+C$</div>`},
 {c:'o',full:true,h:'Special integrals (a > 0)',x:R`<div class="two">
   <div class="fx">$\int\frac{dx}{x^2-a^2}=\frac{1}{2a}\log\left|\frac{x-a}{x+a}\right|+C$</div><div class="fx">$\int\frac{dx}{a^2-x^2}=\frac{1}{2a}\log\left|\frac{a+x}{a-x}\right|+C$</div>
   <div class="fx">$\int\frac{dx}{x^2+a^2}=\frac1a\tan^{-1}\frac xa+C$</div><div class="fx">$\int\frac{dx}{\sqrt{a^2-x^2}}=\sin^{-1}\frac xa+C$</div>
   <div class="fx">$\int\frac{dx}{\sqrt{x^2-a^2}}=\log\left|x+\sqrt{x^2-a^2}\right|+C$</div><div class="fx">$\int\frac{dx}{\sqrt{x^2+a^2}}=\log\left|x+\sqrt{x^2+a^2}\right|+C$</div>
   <div class="fx">$\int\sqrt{a^2-x^2}\,dx=\frac x2\sqrt{a^2-x^2}+\frac{a^2}{2}\sin^{-1}\frac xa+C$</div><div class="fx">$\int\sqrt{x^2\pm a^2}\,dx=\frac x2\sqrt{x^2\pm a^2}\pm\frac{a^2}{2}\log\left|x+\sqrt{x^2\pm a^2}\right|+C$</div></div>
   <p class="note tip">For $ax^2+bx+c$ in the denominator: <b>complete the square</b>, then use the table. For $(px+q)$ on top, write $px+q=A\frac{d}{dx}(ax^2+bx+c)+B$.</p>`},
 {c:'p',full:true,h:'Partial fractions',x:R`<table><tr><th>Denominator</th><th>Write as</th></tr>
   <tr><td>$(x-a)(x-b)$</td><td>$\frac{A}{x-a}+\frac{B}{x-b}$</td></tr>
   <tr><td>$(x-a)^2(x-b)$</td><td>$\frac{A}{x-a}+\frac{B}{(x-a)^2}+\frac{C}{x-b}$</td></tr>
   <tr><td>$(x-a)(x^2+bx+c)$</td><td>$\frac{A}{x-a}+\frac{Bx+C}{x^2+bx+c}$</td></tr></table>
   <p class="note trap">If the degree of the numerator ≥ degree of the denominator, <b>divide first</b>.</p>`}
]},
{ch:7,title:'Definite <span>Integrals</span>',pill:'Chapter 7 · Fundamental theorem · Properties P0 to P6 · Solved ideas',boxes:[
 {c:'g',full:true,h:'Fundamental theorem of calculus',x:R`<div class="fx">If $F'(x)=f(x)$, then $\displaystyle\int_a^b f(x)\,dx=F(b)-F(a)$ &nbsp; (no $+C$ needed)</div>
   <p class="note tip">With substitution in a definite integral, <b>change the limits</b> too — then you never go back to $x$.</p>`},
 {c:'b',full:true,h:'Properties of definite integrals',x:R`<table><tr><th style="width:12mm"></th><th>Property</th></tr>
   <tr><td><b>P0</b></td><td>$\int_a^b f(x)dx=\int_a^b f(t)dt$</td></tr>
   <tr><td><b>P1</b></td><td>$\int_a^b f=-\int_b^a f$, &nbsp; $\int_a^a f=0$</td></tr>
   <tr><td><b>P2</b></td><td>$\int_a^b f=\int_a^c f+\int_c^b f$ &nbsp; (use for $|x|$, $[x]$, piecewise)</td></tr>
   <tr><td><b>P3</b></td><td>$\int_a^b f(x)dx=\int_a^b f(a+b-x)dx$</td></tr>
   <tr><td><b>P4</b></td><td>$\int_0^a f(x)dx=\int_0^a f(a-x)dx$ &nbsp; <span class="hl">the King property</span></td></tr>
   <tr><td><b>P5</b></td><td>$\int_0^{2a}f=2\int_0^a f$ if $f(2a-x)=f(x)$; &nbsp; $=0$ if $f(2a-x)=-f(x)$</td></tr>
   <tr><td><b>P6</b></td><td>$\int_{-a}^{a}f=2\int_0^a f$ if $f$ is <b>even</b>; &nbsp; $=0$ if $f$ is <b>odd</b></td></tr></table>`},
 {c:'o',full:true,h:'Solved idea — the P4 trick',x:R`<p>$I=\displaystyle\int_0^{\pi/2}\frac{\sqrt{\sin x}}{\sqrt{\sin x}+\sqrt{\cos x}}dx$. By P4, replace $x$ by $\frac{\pi}{2}-x$:</p>
   <div class="fx">$I=\displaystyle\int_0^{\pi/2}\frac{\sqrt{\cos x}}{\sqrt{\cos x}+\sqrt{\sin x}}dx$ &nbsp; ⇒ &nbsp; $2I=\int_0^{\pi/2}1\,dx=\frac{\pi}{2}$ &nbsp; ⇒ &nbsp; $I=\frac{\pi}{4}$</div>`},
 {c:'p',h:'Results to remember',x:R`<div class="fx">$\int_0^{\pi/2}\log\sin x\,dx=-\frac{\pi}{2}\log2$</div><div class="fx">$\int_{-1}^{1}\sin^3x\cos^2x\,dx=0$ (odd)</div><div class="fx">$\int_{-a}^{a}|x|dx=a^2$</div>`},
 {c:'t',h:'Even or odd?',x:R`<ul><li><b>Even:</b> $f(-x)=f(x)$ — $x^2$, $\cos x$, $|x|$</li><li><b>Odd:</b> $f(-x)=-f(x)$ — $x^3$, $\sin x$, $\tan x$</li><li>odd × even = odd; odd × odd = even</li></ul>`}
]},
/* ---------- CH 8 ---------- */
{ch:8,title:'Application of <span>Integrals</span>',pill:'Chapter 8 · Area under a curve · Standard curves · Area between a curve and a line',boxes:[
 {c:'g',full:true,h:'Area under a curve',x:R`<div class="two"><div class="fx">Between $y=f(x)$, the x-axis and $x=a,\ x=b$: &nbsp; $A=\displaystyle\int_a^b y\,dx$</div><div class="fx">Between $x=g(y)$, the y-axis and $y=c,\ y=d$: &nbsp; $A=\displaystyle\int_c^d x\,dy$</div></div>
   <p class="note trap">Area is never negative. If the curve is <b>below</b> the x-axis, take $\left|\int_a^b y\,dx\right|$. If it crosses the axis, split the integral at the crossing point.</p>`},
 {c:'b',full:true,h:'Standard areas',x:R`<table><tr><th>Region</th><th>Set-up</th><th>Area</th></tr>
   <tr><td>Circle $x^2+y^2=a^2$</td><td>$4\int_0^a\sqrt{a^2-x^2}\,dx$</td><td>$\pi a^2$</td></tr>
   <tr><td>Ellipse $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$</td><td>$4\cdot\frac ba\int_0^a\sqrt{a^2-x^2}\,dx$</td><td>$\pi ab$</td></tr>
   <tr><td>Parabola $y^2=4ax$ and its latus rectum $x=a$</td><td>$2\int_0^a 2\sqrt{ax}\,dx$</td><td>$\frac{8a^2}{3}$</td></tr>
   <tr><td>$y=x^2$ and the line $y=4$</td><td>$2\int_0^4\sqrt{y}\,dy$</td><td>$\frac{32}{3}$</td></tr></table>`},
 {c:'o',h:'Method for every area question',x:R`<ol style="padding-left:4mm"><li>Draw a rough sketch and shade the region.</li><li>Find the points of intersection.</li><li>Choose vertical strips ($dx$) or horizontal strips ($dy$).</li><li>Use symmetry: compute one part and multiply.</li></ol>`},
 {c:'p',h:'Between a curve and a line',x:R`<div class="fx">$A=\displaystyle\int_a^b\big[\,y_{\text{upper}}-y_{\text{lower}}\,\big]dx$</div>
   <p>Example: $y=x^2$ and $y=x$ meet at $x=0,1$:</p><div class="fx">$\int_0^1(x-x^2)dx=\frac12-\frac13=\frac16$</div>`},
 {c:'t',full:true,h:'Solved idea — 5-mark pattern',x:R`<p>Area of the ellipse $\dfrac{x^2}{16}+\dfrac{y^2}{9}=1$:</p>
   <div class="fx">$A=4\int_0^4\tfrac34\sqrt{16-x^2}\,dx=3\left[\tfrac x2\sqrt{16-x^2}+8\sin^{-1}\tfrac x4\right]_0^4=3\cdot8\cdot\tfrac{\pi}{2}=12\pi$ sq. units</div>`}
]}
);
