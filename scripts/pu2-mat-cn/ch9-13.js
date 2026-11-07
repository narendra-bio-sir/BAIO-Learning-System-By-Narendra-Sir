/* Chapters 9–13 */
PAGES.push(
/* ---------- CH 9 ---------- */
{ch:9,title:'Differential <span>Equations</span>',pill:'Chapter 9 · Order · Degree · Solutions · Variable separable',boxes:[
 {c:'g',full:true,h:'Order and degree',x:R`<ul><li><b>Order</b> = order of the highest derivative present.</li><li><b>Degree</b> = power of the highest-order derivative, <span class="hl">after</span> the equation is made a polynomial in the derivatives.</li><li>If the equation is not a polynomial in the derivatives (e.g. contains $\sin y'$ or $e^{y''}$), the degree is <b>not defined</b>.</li></ul>
   <table><tr><th>Equation</th><th>Order</th><th>Degree</th></tr>
   <tr><td>$\left(\frac{d^2y}{dx^2}\right)^3+\left(\frac{dy}{dx}\right)^4+y=0$</td><td>2</td><td>3</td></tr>
   <tr><td>$y'''+2y''+y'=0$</td><td>3</td><td>1</td></tr>
   <tr><td>$y''+\cos(y')=0$</td><td>2</td><td>not defined</td></tr></table>`},
 {c:'b',h:'Solutions',x:R`<ul><li><b>General solution:</b> contains arbitrary constants (as many as the order).</li><li><b>Particular solution:</b> constants fixed using the given condition.</li><li>To <b>verify</b> a solution: differentiate it and substitute in the equation.</li></ul>`},
 {c:'o',h:'Variable separable',x:R`<p>Form $\dfrac{dy}{dx}=f(x)\,g(y)$:</p>
   <div class="fx">$\displaystyle\int\frac{dy}{g(y)}=\int f(x)\,dx+C$</div>
   <div class="fx l">$\frac{dy}{dx}=\frac{1+y^2}{1+x^2}$ ⇒ $\tan^{-1}y=\tan^{-1}x+C$</div>`},
 {c:'p',full:true,h:'Solved idea — particular solution',x:R`<p>Solve $\dfrac{dy}{dx}=e^{x+y}$ given $y(0)=0$.</p>
   <div class="fx">$e^{-y}dy=e^xdx$ ⇒ $-e^{-y}=e^x+C$; &nbsp; $x=0,y=0$: $-1=1+C$ ⇒ $C=-2$ ⇒ <b>$e^x+e^{-y}=2$</b></div>`}
]},
{ch:9,title:'Homogeneous &amp; <span>Linear DEs</span>',pill:'Chapter 9 · Homogeneous equations · Linear equations and integrating factor',boxes:[
 {c:'g',full:true,h:'Homogeneous differential equations',x:R`<p>$F(x,y)$ is <b>homogeneous of degree n</b> if $F(\lambda x,\lambda y)=\lambda^nF(x,y)$. The DE $\dfrac{dy}{dx}=F(x,y)$ is homogeneous if $F$ has degree 0.</p>
   <div class="two"><div class="fx l"><b>Method:</b> put $y=vx$, &nbsp; $\dfrac{dy}{dx}=v+x\dfrac{dv}{dx}$, then separate $v$ and $x$.</div><div class="fx l">If it looks like $\dfrac{dx}{dy}=F(x,y)$, put $x=vy$ instead.</div></div>
   <div class="fx l" style="margin-top:1.6mm">$\frac{dy}{dx}=\frac{x+y}{x}$: $v+x\frac{dv}{dx}=1+v$ ⇒ $dv=\frac{dx}{x}$ ⇒ $\frac yx=\log|x|+C$</div>`},
 {c:'b',full:true,h:'Linear differential equations',x:R`<div class="two"><div><p>Form: $\dfrac{dy}{dx}+Py=Q$ &nbsp; ($P,Q$ functions of $x$)</p>
   <div class="fx">I.F. $=e^{\int P\,dx}$</div><div class="fx">$y\cdot(\text{I.F.})=\displaystyle\int Q\cdot(\text{I.F.})\,dx+C$</div></div>
   <div><p>Form: $\dfrac{dx}{dy}+P_1x=Q_1$ &nbsp; ($P_1,Q_1$ functions of $y$)</p>
   <div class="fx">I.F. $=e^{\int P_1\,dy}$</div><div class="fx">$x\cdot(\text{I.F.})=\displaystyle\int Q_1\cdot(\text{I.F.})\,dy+C$</div></div></div>
   <p class="note tip">Useful: $e^{\log f(x)}=f(x)$, so $e^{\int\frac1x dx}=x$ and $e^{\int\tan x\,dx}=\sec x$.</p>`},
 {c:'o',full:true,h:'Solved idea — 5-mark pattern',x:R`<p>Solve $\dfrac{dy}{dx}+\dfrac{y}{x}=x^2$.</p>
   <div class="fx">$P=\tfrac1x$, I.F. $=x$ &nbsp; ⇒ &nbsp; $xy=\int x^3dx=\tfrac{x^4}{4}+C$ &nbsp; ⇒ &nbsp; $y=\tfrac{x^3}{4}+\tfrac{C}{x}$</div>`},
 {c:'p',h:'Which method?',x:R`<table><tr><th>Looks like</th><th>Use</th></tr><tr><td>$f(x)\,dx=g(y)\,dy$</td><td>Variable separable</td></tr><tr><td>every term same degree</td><td>$y=vx$</td></tr><tr><td>$y'+Py=Q$</td><td>Integrating factor</td></tr></table>`},
 {c:'t',h:'Common slips',x:R`<ul><li>Forgetting $+C$ before using the condition.</li><li>Make the coefficient of $\frac{dy}{dx}$ equal to 1 before reading $P$.</li></ul>`}
]},
/* ---------- CH 10 ---------- */
{ch:10,title:'Vector Algebra — <span>Basics</span>',pill:'Chapter 10 · Types of vectors · Components · Addition · Section formula',boxes:[
 {c:'g',full:true,h:'Types of vectors',x:R`<div class="three"><div class="fx l"><b>Zero vector</b> — magnitude 0, no definite direction</div><div class="fx l"><b>Unit vector</b> — magnitude 1: $\hat a=\dfrac{\vec a}{|\vec a|}$</div><div class="fx l"><b>Co-initial</b> — same starting point</div>
   <div class="fx l"><b>Collinear</b> — parallel to the same line</div><div class="fx l"><b>Equal</b> — same magnitude and direction</div><div class="fx l"><b>Negative</b> — same magnitude, opposite direction</div></div>`},
 {c:'b',full:true,h:'Components and direction cosines',x:R`<div class="two"><div><div class="fx">$\vec r=x\hat i+y\hat j+z\hat k$, &nbsp; $|\vec r|=\sqrt{x^2+y^2+z^2}$</div><div class="fx">$\overrightarrow{PQ}=(x_2-x_1)\hat i+(y_2-y_1)\hat j+(z_2-z_1)\hat k$</div></div>
   <div><div class="fx">Direction cosines: $l=\frac{x}{r},\ m=\frac{y}{r},\ n=\frac{z}{r}$</div><div class="fx">$l^2+m^2+n^2=1$</div></div></div>`},
 {c:'o',h:'Addition',x:R`<ul><li><b>Triangle law:</b> $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$</li><li><b>Parallelogram law</b>: the diagonal is the sum.</li><li>$\vec a+\vec b=\vec b+\vec a$; addition is associative.</li><li>Sides of a closed triangle taken in order add to $\vec 0$.</li></ul>`},
 {c:'p',h:'Collinearity',x:R`<p>$\vec a,\vec b$ are collinear $\iff\vec b=\lambda\vec a$, i.e. their components are proportional:</p><div class="fx">$\dfrac{b_1}{a_1}=\dfrac{b_2}{a_2}=\dfrac{b_3}{a_3}$</div>`},
 {c:'t',full:true,h:'Section formula',x:R`<div class="two"><div class="fx">Internal $m:n$: &nbsp; $\vec r=\dfrac{m\vec b+n\vec a}{m+n}$</div><div class="fx">External $m:n$: &nbsp; $\vec r=\dfrac{m\vec b-n\vec a}{m-n}$</div></div>
   <div class="fx" style="margin-top:1.6mm">Mid-point $=\dfrac{\vec a+\vec b}{2}$ &nbsp;·&nbsp; Centroid $=\dfrac{\vec a+\vec b+\vec c}{3}$</div>`}
]},
{ch:10,title:'Dot &amp; <span>Cross Product</span>',pill:'Chapter 10 · Scalar product · Projection · Vector product · Area',boxes:[
 {c:'g',full:true,h:'Scalar (dot) product',x:R`<div class="two"><div><div class="fx">$\vec a\cdot\vec b=|\vec a||\vec b|\cos\theta=a_1b_1+a_2b_2+a_3b_3$</div><div class="fx">$\cos\theta=\dfrac{\vec a\cdot\vec b}{|\vec a||\vec b|}$</div></div>
   <ul><li>$\vec a\perp\vec b\iff\vec a\cdot\vec b=0$</li><li>$\hat i\cdot\hat i=1$, &nbsp; $\hat i\cdot\hat j=0$</li><li>$\vec a\cdot\vec a=|\vec a|^2$</li><li>$|\vec a\pm\vec b|^2=|\vec a|^2+|\vec b|^2\pm2\,\vec a\cdot\vec b$</li></ul></div>
   <div class="fx">Projection of $\vec a$ on $\vec b$ $=\dfrac{\vec a\cdot\vec b}{|\vec b|}$</div>`},
 {c:'b',full:true,h:'Vector (cross) product',x:R`<div class="two"><div><div class="fx">$\vec a\times\vec b=|\vec a||\vec b|\sin\theta\,\hat n$</div>
   <div class="fx">$\vec a\times\vec b=\begin{vmatrix}\hat i&\hat j&\hat k\\a_1&a_2&a_3\\b_1&b_2&b_3\end{vmatrix}$</div></div>
   <ul><li>$\vec a\times\vec b=-\vec b\times\vec a$ (not commutative)</li><li>$\vec a\parallel\vec b\iff\vec a\times\vec b=\vec0$</li><li>$\hat i\times\hat j=\hat k,\ \hat j\times\hat k=\hat i,\ \hat k\times\hat i=\hat j$</li><li>$\hat i\times\hat i=\vec 0$</li></ul></div>`},
 {c:'o',full:true,h:'Areas and unit normals',x:R`<div class="three"><div class="fx">Parallelogram (adjacent sides): $|\vec a\times\vec b|$</div><div class="fx">Parallelogram (diagonals): $\tfrac12|\vec d_1\times\vec d_2|$</div><div class="fx">Triangle: $\tfrac12|\vec a\times\vec b|$</div></div>
   <div class="fx" style="margin-top:1.6mm">Unit vector perpendicular to both $\vec a$ and $\vec b$: &nbsp; $\pm\dfrac{\vec a\times\vec b}{|\vec a\times\vec b|}$</div>`},
 {c:'p',full:true,h:'Solved idea',x:R`<p>$\vec a=\hat i+\hat j+\hat k$, $\vec b=\hat i+2\hat j+3\hat k$. Area of the parallelogram with these adjacent sides:</p>
   <div class="fx">$\vec a\times\vec b=\hat i(3-2)-\hat j(3-1)+\hat k(2-1)=\hat i-2\hat j+\hat k$, &nbsp; area $=\sqrt{1+4+1}=\sqrt6$ sq. units</div>`}
]},
/* ---------- CH 11 ---------- */
{ch:11,title:'Three Dimensional <span>Geometry</span>',pill:'Chapter 11 · Direction cosines and ratios · Equation of a line',boxes:[
 {c:'g',full:true,h:'Direction cosines &amp; direction ratios',x:R`<div class="two"><ul><li>If a line makes angles $\alpha,\beta,\gamma$ with the axes: $l=\cos\alpha,\ m=\cos\beta,\ n=\cos\gamma$.</li><li><span class="hl">$l^2+m^2+n^2=1$</span></li><li>Direction ratios $a,b,c$ are any numbers proportional to $l,m,n$.</li></ul>
   <div><div class="fx">$l=\dfrac{a}{\sqrt{a^2+b^2+c^2}}$ (similarly $m,n$)</div><div class="fx">DRs of PQ: $x_2-x_1,\ y_2-y_1,\ z_2-z_1$</div></div></div>`},
 {c:'b',full:true,h:'Equation of a line',x:R`<table><tr><th>Given</th><th>Vector form</th><th>Cartesian form</th></tr>
   <tr><td>a point $\vec a$ and a direction $\vec b$</td><td>$\vec r=\vec a+\lambda\vec b$</td><td>$\dfrac{x-x_1}{a}=\dfrac{y-y_1}{b}=\dfrac{z-z_1}{c}$</td></tr>
   <tr><td>two points $\vec a,\vec b$</td><td>$\vec r=\vec a+\lambda(\vec b-\vec a)$</td><td>$\dfrac{x-x_1}{x_2-x_1}=\dfrac{y-y_1}{y_2-y_1}=\dfrac{z-z_1}{z_2-z_1}$</td></tr></table>
   <p class="note trap">Before reading DRs from the Cartesian form, make the coefficients of $x,y,z$ equal to 1: $\frac{3-x}{2}$ means DR $-2$.</p>`},
 {c:'o',h:'Collinear points',x:R`<p>A, B, C are collinear if DRs of AB and BC are proportional.</p>`},
 {c:'p',h:'Point on a line',x:R`<p>A general point on $\frac{x-1}{2}=\frac{y+3}{3}=\frac{z}{1}=\lambda$ is $(2\lambda+1,\ 3\lambda-3,\ \lambda)$ — use this to find foot of perpendicular or intersection.</p>`}
]},
{ch:11,title:'Angle &amp; <span>Shortest Distance</span>',pill:'Chapter 11 · Angle between lines · Skew lines · Shortest distance',boxes:[
 {c:'g',full:true,h:'Angle between two lines',x:R`<div class="two"><div class="fx">$\cos\theta=\left|\dfrac{a_1a_2+b_1b_2+c_1c_2}{\sqrt{a_1^2+b_1^2+c_1^2}\sqrt{a_2^2+b_2^2+c_2^2}}\right|$</div><div class="fx">Vector form: $\cos\theta=\left|\dfrac{\vec b_1\cdot\vec b_2}{|\vec b_1||\vec b_2|}\right|$</div></div>
   <div class="two" style="margin-top:1.6mm"><div class="fx"><b>Perpendicular:</b> $a_1a_2+b_1b_2+c_1c_2=0$</div><div class="fx"><b>Parallel:</b> $\dfrac{a_1}{a_2}=\dfrac{b_1}{b_2}=\dfrac{c_1}{c_2}$</div></div>`},
 {c:'b',full:true,h:'Shortest distance between skew lines',x:R`<p><b>Skew lines</b> are neither parallel nor intersecting (they lie in different planes).</p>
   <div class="fx">$d=\left|\dfrac{(\vec b_1\times\vec b_2)\cdot(\vec a_2-\vec a_1)}{|\vec b_1\times\vec b_2|}\right|$</div>
   <p>Cartesian: numerator $=\begin{vmatrix}x_2-x_1&y_2-y_1&z_2-z_1\\a_1&b_1&c_1\\a_2&b_2&c_2\end{vmatrix}$. If $d=0$ the lines <b>intersect</b>.</p>`},
 {c:'o',full:true,h:'Distance between parallel lines',x:R`<div class="fx">$\vec r=\vec a_1+\lambda\vec b$ and $\vec r=\vec a_2+\mu\vec b$: &nbsp; $d=\left|\dfrac{\vec b\times(\vec a_2-\vec a_1)}{|\vec b|}\right|$</div>`},
 {c:'p',full:true,h:'Solved idea — 5-mark pattern',x:R`<p>Shortest distance between $\vec r=(\hat i+2\hat j+\hat k)+\lambda(\hat i-\hat j+\hat k)$ and $\vec r=(2\hat i-\hat j-\hat k)+\mu(2\hat i+\hat j+2\hat k)$.</p>
   <div class="fx l">$\vec a_2-\vec a_1=\hat i-3\hat j-2\hat k$, &nbsp; $\vec b_1\times\vec b_2=\begin{vmatrix}\hat i&\hat j&\hat k\\1&-1&1\\2&1&2\end{vmatrix}=-3\hat i+0\hat j+3\hat k$</div>
   <div class="fx">$d=\dfrac{|(-3)(1)+0+3(-2)|}{\sqrt{9+9}}=\dfrac{9}{3\sqrt2}=\dfrac{3}{\sqrt2}$ units</div>`}
]},
/* ---------- CH 12 ---------- */
{ch:12,title:'Linear <span>Programming</span>',pill:'Chapter 12 · Terms · Graphical method · Corner point method',boxes:[
 {c:'g',full:true,h:'Key terms',x:R`<table><tr><th style="width:44mm">Term</th><th>Meaning</th></tr>
   <tr><td><b>Objective function</b></td><td>$Z=ax+by$, to be maximised or minimised</td></tr>
   <tr><td><b>Decision variables</b></td><td>$x,y$ — with $x\ge0,\ y\ge0$ (non-negative constraints)</td></tr>
   <tr><td><b>Constraints</b></td><td>linear inequalities the variables must obey</td></tr>
   <tr><td><b>Feasible region</b></td><td>common region of all constraints — every point is a feasible solution</td></tr>
   <tr><td><b>Optimal solution</b></td><td>feasible point giving the best value of $Z$</td></tr></table>`},
 {c:'b',full:true,h:'Corner point method',x:R`<ol style="padding-left:4mm"><li>Draw each constraint as a line; shade the correct side (test with the origin).</li><li>Mark the feasible region and find all its <b>corner points</b>.</li><li>Evaluate $Z$ at every corner point.</li><li>Bounded region: the largest value is the maximum, the smallest is the minimum.</li></ol>
   <p class="note tip"><span class="hl">Theorem:</span> if an optimal value exists, it occurs at a corner point of the feasible region.</p>`},
 {c:'o',h:'Unbounded region rule',x:R`<p>If the region is unbounded and $M$ is the largest corner value, draw $ax+by>M$. If this half-plane has <b>no point</b> in common with the region, $M$ is the maximum; otherwise $Z$ has no maximum. (For minimum, use $ax+by\lt m$.)</p>`},
 {c:'p',h:'Multiple optimal solutions',x:R`<p>If two adjacent corners give the <b>same</b> optimal value, every point on the segment joining them is optimal.</p>`},
 {c:'t',full:true,h:'Solved idea',x:R`<p>Maximise $Z=3x+2y$ subject to $x+2y\le10,\ 3x+y\le15,\ x,y\ge0$.</p>
   <table><tr><th>Corner</th><th>$(0,0)$</th><th>$(5,0)$</th><th>$(4,3)$</th><th>$(0,5)$</th></tr><tr><td>$Z=3x+2y$</td><td>0</td><td>15</td><td><b>18</b></td><td>10</td></tr></table>
   <p>Maximum $Z=18$ at $(4,3)$ — the corner where the two lines meet.</p>`}
]},
/* ---------- CH 13 ---------- */
{ch:13,title:'Probability — <span>Conditional</span>',pill:'Chapter 13 · Conditional probability · Multiplication theorem · Independent events',boxes:[
 {c:'g',full:true,h:'Conditional probability',x:R`<div class="fx">$P(E|F)=\dfrac{P(E\cap F)}{P(F)},\quad P(F)\ne0$ &nbsp; — probability of E given that F has happened</div>
   <div class="three" style="margin-top:1.6mm"><div class="fx">$P(S|F)=P(F|F)=1$</div><div class="fx">$P(E'|F)=1-P(E|F)$</div><div class="fx">$P(A\cup B|F)=P(A|F)+P(B|F)-P(A\cap B|F)$</div></div>`},
 {c:'b',h:'Multiplication theorem',x:R`<div class="fx">$P(E\cap F)=P(E)\,P(F|E)=P(F)\,P(E|F)$</div><div class="fx">$P(E\cap F\cap G)=P(E)P(F|E)P(G|E\cap F)$</div>
   <p>Used for drawing cards or balls <b>without replacement</b>.</p>`},
 {c:'o',h:'Independent events',x:R`<div class="fx">$P(E\cap F)=P(E)\,P(F)$</div>
   <ul><li>Then $P(E|F)=P(E)$.</li><li>If E, F are independent, so are $E$ &amp; $F'$, $E'$ &amp; $F$, $E'$ &amp; $F'$.</li><li>$P(\text{at least one})=1-P(E')P(F')$</li></ul>`},
 {c:'r',full:true,h:'Independent vs mutually exclusive',x:R`<table><tr><th></th><th>Mutually exclusive</th><th>Independent</th></tr>
   <tr><td>Meaning</td><td>cannot happen together</td><td>one does not affect the other</td></tr>
   <tr><td>Condition</td><td>$P(E\cap F)=0$</td><td>$P(E\cap F)=P(E)P(F)$</td></tr></table>
   <p class="note trap">Two events with non-zero probabilities cannot be both mutually exclusive <b>and</b> independent.</p>`},
 {c:'t',full:true,h:'Solved idea',x:R`<p>A die is thrown. E: number is a multiple of 3, F: number is even. Are E and F independent?</p>
   <div class="fx">$P(E)=\tfrac26=\tfrac13,\ P(F)=\tfrac12,\ P(E\cap F)=P(\{6\})=\tfrac16=\tfrac13\cdot\tfrac12$ &nbsp; ⇒ &nbsp; <b>independent</b></div>`}
]},
{ch:13,title:'Bayes’ Theorem &amp; <span>Random Variables</span>',pill:'Chapter 13 · Total probability · Bayes’ theorem · Probability distribution · Mean',boxes:[
 {c:'g',full:true,h:'Total probability &amp; Bayes’ theorem',x:R`<p>If $E_1,E_2,\dots,E_n$ partition the sample space and A is any event:</p>
   <div class="two"><div class="fx"><b>Total probability</b><br>$P(A)=\sum_{j} P(E_j)\,P(A|E_j)$</div><div class="fx"><b>Bayes’ theorem</b><br>$P(E_i|A)=\dfrac{P(E_i)\,P(A|E_i)}{\sum_j P(E_j)\,P(A|E_j)}$</div></div>
   <p class="note tip">Bayes answers “given the result, what is the probability it came from <b>this</b> cause?” — bag, factory, machine, test questions.</p>`},
 {c:'b',full:true,h:'Solved idea — 5-mark pattern',x:R`<p>Bag I: 3 red, 4 black. Bag II: 5 red, 6 black. A bag is chosen at random and a ball drawn is red. Find P(it came from Bag II).</p>
   <div class="fx">$P(E_2|R)=\dfrac{\frac12\cdot\frac{5}{11}}{\frac12\cdot\frac37+\frac12\cdot\frac{5}{11}}=\dfrac{\frac{5}{11}}{\frac{33+35}{77}}=\dfrac{35}{68}$</div>`},
 {c:'o',h:'Random variable',x:R`<p>A <b>random variable</b> X assigns a real number to each outcome. Its <b>probability distribution</b> lists each value $x_i$ with $p_i$:</p>
   <div class="fx">$p_i\ge0$ and $\sum p_i=1$</div>`},
 {c:'p',h:'Mean (expectation)',x:R`<div class="fx">$E(X)=\mu=\sum x_i\,p_i$</div>
   <p>Example: X = number of heads in 2 tosses: values 0, 1, 2 with probabilities $\frac14,\frac12,\frac14$, so $E(X)=1$.</p>`},
 {c:'t',full:true,h:'Exam checklist for this chapter',x:R`<div class="three"><div class="fx l">✔ $P(E|F)$ from a table or a die / coin (2 marks)</div><div class="fx l">✔ Independence test and “at least one” (3 marks)</div><div class="fx l">✔ Bayes’ theorem word problem (5 marks)</div></div>`}
]}
);
