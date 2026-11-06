/* Practice boxes, keyed by page title start. Each item: [question, answer] */
const PRACTICE = {
'Relations &amp; <span>Functions</span>':[
 [R`Number of relations on $A=\{1,2\}$.`,R`$2^{4}=16$`],
   [R`$R=\{(a,b):|a-b|\text{ is even}\}$ on $\{1,2,3,4,5\}$ — equivalence classes?`,R`$\{1,3,5\}$ and $\{2,4\}$`]],
'Inverse Trigonometric <span>Functions</span>':[
 [R`Principal value of $\cos^{-1}\!\left(-\frac{\sqrt3}{2}\right)$.`,R`$\frac{5\pi}{6}$`],
 [R`$\tan^{-1}\sqrt3-\sec^{-1}(-2)$`,R`$\frac{\pi}{3}-\frac{2\pi}{3}=-\frac{\pi}{3}$`],
 [R`Principal value of $\csc^{-1}(-\sqrt2)$.`,R`$-\frac{\pi}{4}$`],
 [R`Principal value of $\sec^{-1}\!\left(\frac{2}{\sqrt3}\right)$.`,R`$\frac{\pi}{6}$`],
 [R`Domain of $\sin^{-1}(2x)$.`,R`$\left[-\frac12,\frac12\right]$`],
 [R`Domain of $\cos^{-1}(x^2-4)$.`,R`$[-\sqrt5,-\sqrt3]\cup[\sqrt3,\sqrt5]$`]],
'Inverse Trig — <span>Key Results</span>':[
 [R`$\sin^{-1}\!\left(\sin\frac{2\pi}{3}\right)$`,R`$\frac{\pi}{3}$`],
 [R`$\tan^{-1}\frac12+\tan^{-1}\frac13$`,R`$\frac{\pi}{4}$`]],
'Matrices — <span>Types &amp; Operations</span>':[
 [R`Construct $A_{2\times2}$ with $a_{ij}=\frac{(i+j)^2}{2}$.`,R`$\begin{bmatrix}2&\frac92\\\frac92&8\end{bmatrix}$`],
  [R`$A=\begin{bmatrix}1&2\\3&4\end{bmatrix}$, find $A^2$.`,R`$\begin{bmatrix}7&10\\15&22\end{bmatrix}$`]],
'Transpose · Symmetric · <span>Inverse</span>':[
 [R`$\begin{bmatrix}0&2\\x&0\end{bmatrix}$ is skew symmetric. Find $x$.`,R`$x=-2$`],
 [R`Show that $AA'$ is symmetric for any matrix A.`,R`$(AA')'=(A')'A'=AA'$`],
 [R`A symmetric, B skew symmetric. Is $AB-BA$ symmetric?`,R`Yes: $(AB-BA)'=-BA+AB$`],
 [R`If $A'=-A$, what is $a_{11}+a_{22}+a_{33}$?`,R`0 (diagonal elements are 0)`]],
'Determinants — <span>Basics &amp; Area</span>':[
   [R`Area of triangle $(k,0),(4,0),(0,2)$ is 4. Find $k$.`,R`$|8-2k|=8\Rightarrow k=0$ or $8$`],
 [R`Line through $(1,2)$ and $(3,6)$ using determinants.`,R`$y=2x$`]],
'Adjoint, Inverse &amp; <span>Linear Equations</span>':[
 [R`$A=\begin{bmatrix}2&3\\1&4\end{bmatrix}$, find $A^{-1}$.`,R`$\frac15\begin{bmatrix}4&-3\\-1&2\end{bmatrix}$`],
  [R`Is $x+y=2,\ 2x+2y=3$ consistent?`,R`$|A|=0$, $(\text{adj}A)B\ne O$ → inconsistent`]],
'<span>Continuity</span>':[
 [R`$f(x)=\frac{x^2-25}{x-5}$ $(x\ne5)$, $f(5)=k$ is continuous. Find $k$.`,R`$k=10$`],
 [R`$f(x)=\frac{\sin x}{x}$ $(x\ne0)$, $f(0)=k$ is continuous. Find $k$.`,R`$k=1$`],
 [R`Points of discontinuity of $[x]$ on $(-2,2)$.`,R`$x=-1,0,1$`],
 [R`Is $|x|+|x-1|$ continuous everywhere?`,R`Yes — sum of continuous functions`]],
'Differentiability &amp; <span>Rules</span>':[
 [R`$\frac{d}{dx}\sin(x^2+5)$`,R`$2x\cos(x^2+5)$`],
  [R`$\frac{d}{dx}\tan^{-1}(e^x)$`,R`$\frac{e^x}{1+e^{2x}}$`]],
'Log, Parametric &amp; <span>Second Order</span>':[
 [R`$y=(\log x)^{\cos x}$, find $\frac{dy}{dx}$.`,R`$y\left[\frac{\cos x}{x\log x}-\sin x\log(\log x)\right]$`],
 [R`$x=at^2,\ y=2at$, find $\frac{dy}{dx}$.`,R`$\frac1t$`],
 [R`$y=\log x$, find $\frac{d^2y}{dx^2}$.`,R`$-\frac{1}{x^2}$`],
 [R`$y=5\cos x-3\sin x$. Show $y''+y=0$.`,R`$y''=-5\cos x+3\sin x=-y$`]],
'Application of <span>Derivatives</span>':[
 [R`Radius of a circle grows at 0.7 cm/s. Rate of growth of circumference?`,R`$2\pi(0.7)=1.4\pi$ cm/s`],
 [R`Cube volume grows at 8 cm³/s. Rate of growth of surface area when edge = 12 cm?`,R`$\frac{8}{3}$ cm²/s`],
 [R`Revenue $R(x)=3x^2+36x+5$. Marginal revenue at $x=5$?`,R`$6x+36=66$`],
 [R`Where is $x^2-4x+6$ increasing?`,R`$(2,\infty)$; decreasing on $(-\infty,2)$`],
 [R`Show $e^{2x}$ is increasing on $\mathbb R$.`,R`$f'=2e^{2x}>0$`],
 [R`Is $\log\sin x$ increasing on $\left(0,\frac{\pi}{2}\right)$?`,R`Yes, $f'=\cot x>0$`]],
'Maxima &amp; <span>Minima</span>':[
 [R`Maximum value of $\sin x+\cos x$.`,R`$\sqrt2$`],
 [R`Local max and min of $x^3-6x^2+9x+15$.`,R`Max 19 at $x=1$; min 15 at $x=3$`],
 [R`Absolute max and min of $x^3$ on $[-2,2]$.`,R`Max 8, min $-8$`],
 [R`Two numbers add to 24. Maximum product?`,R`$12\times12=144$`],
 [R`Maximum value of $-|x+1|+3$.`,R`3, at $x=-1$`],
 [R`Minimum of $x^2+2x+5$.`,R`4, at $x=-1$`]],
'Integrals — <span>Standard Forms</span>':[
 [R`$\int\frac{x^3-1}{x^2}dx$`,R`$\frac{x^2}{2}+\frac1x+C$`],
 [R`$\int\sec x(\sec x+\tan x)dx$`,R`$\tan x+\sec x+C$`],
 [R`$\int\sin^2x\,dx$`,R`$\frac x2-\frac{\sin2x}{4}+C$`],
 [R`$\int\frac{1-\sin x}{\cos^2x}dx$`,R`$\tan x-\sec x+C$`],
 [R`$\int\sin2x\cos3x\,dx$`,R`$-\frac{\cos5x}{10}+\frac{\cos x}{2}+C$`],
 [R`$\int(2x^2+e^x)dx$`,R`$\frac{2x^3}{3}+e^x+C$`]],
'Methods of <span>Integration</span>':[
 [R`$\int xe^x\,dx$`,R`$e^x(x-1)+C$`],
 [R`$\int\log x\,dx$`,R`$x\log x-x+C$`],
 [R`$\int\frac{dx}{x^2+2x+2}$`,R`$\tan^{-1}(x+1)+C$`],
 [R`$\int\frac{dx}{(x+1)(x+2)}$`,R`$\log\left|\frac{x+1}{x+2}\right|+C$`]],
'Definite <span>Integrals</span>':[
 [R`$\int_0^{\pi/2}\cos^2x\,dx$`,R`$\frac{\pi}{4}$`],
 [R`$\int_{-\pi/2}^{\pi/2}\sin^7x\,dx$`,R`0 (odd function)`]],
'Application of <span>Integrals</span>':[
 [R`Area under $y=x^2$ from $x=1$ to $x=2$.`,R`$\frac73$ sq. units`],
 [R`Area between $y^2=x$, $x=1$, $x=4$ (first quadrant).`,R`$\frac{14}{3}$ sq. units`],
 [R`Area of the ellipse $\frac{x^2}{4}+\frac{y^2}{9}=1$.`,R`$6\pi$ sq. units`],
 [R`Area of the circle $x^2+y^2=4$.`,R`$4\pi$ sq. units`]],
'Differential <span>Equations</span>':[
 [R`Order and degree of $y'+5y=0$.`,R`Order 1, degree 1`],
 [R`Order and degree of $(y'')^2+\cos y'=0$.`,R`Order 2, degree not defined`],
 [R`Arbitrary constants in the general solution of a 4th-order DE?`,R`4`],
 [R`Solve $\frac{dy}{dx}=\frac xy$.`,R`$y^2-x^2=C$`],
 [R`Solve $\frac{dy}{dx}=e^{x-y}$.`,R`$e^y=e^x+C$`],
 [R`Solve $\frac{dy}{dx}=1+y^2$.`,R`$\tan^{-1}y=x+C$`]],
'Homogeneous &amp; <span>Linear DEs</span>':[
 [R`I.F. of $x\frac{dy}{dx}+2y=x^2$.`,R`$x^2$`],
 [R`Solve $\frac{dy}{dx}+y=e^{-x}$.`,R`$ye^x=x+C$`]],
'Vector Algebra — <span>Basics</span>':[
 [R`Unit vector along $2\hat i+3\hat j+\hat k$.`,R`$\frac{1}{\sqrt{14}}(2\hat i+3\hat j+\hat k)$`],
 [R`Vector of magnitude 9 along $\hat i-2\hat j+2\hat k$.`,R`$3\hat i-6\hat j+6\hat k$`],
 [R`Find $x$ if $2\hat i+3\hat j-6\hat k$ and $x\hat i-9\hat j+18\hat k$ are collinear.`,R`$x=-6$`],
 [R`Point dividing $\hat i+2\hat j-\hat k$ and $-\hat i+\hat j+\hat k$ internally in 2 : 1.`,R`$\frac13(-\hat i+4\hat j+\hat k)$`]],
'Dot &amp; <span>Cross Product</span>':[
 [R`Angle between $\hat i-2\hat j+3\hat k$ and $3\hat i-2\hat j+\hat k$.`,R`$\cos^{-1}\frac57$`],
 [R`Projection of $\hat i+3\hat j+7\hat k$ on $7\hat i-\hat j+8\hat k$.`,R`$\frac{60}{\sqrt{114}}$`],
 [R`If $|\vec a+\vec b|=|\vec a-\vec b|$, what is the angle between them?`,R`$90^\circ$`],
 [R`Area of triangle $A(1,1,1),B(1,2,3),C(2,3,1)$.`,R`$\frac{\sqrt{21}}{2}$ sq. units`]],
'Three Dimensional <span>Geometry</span>':[
 [R`DCs of a line making $90^\circ,60^\circ,30^\circ$ with the axes.`,R`$0,\frac12,\frac{\sqrt3}{2}$`],
 [R`DCs of a line with DRs $2,-1,-2$.`,R`$\frac23,-\frac13,-\frac23$`],
 [R`Line through $(5,2,-4)$ parallel to $3\hat i+2\hat j-8\hat k$.`,R`$\frac{x-5}{3}=\frac{y-2}{2}=\frac{z+4}{-8}$`],
 [R`DCs of a line equally inclined to the axes.`,R`$\pm\frac{1}{\sqrt3}$ each`],
 [R`Are $(2,3,4),(-1,-2,1),(5,8,7)$ collinear?`,R`Yes: DRs $-3,-5,-3$ and $6,10,6$`],
 [R`Line through $(3,-2,-5)$ and $(3,-2,6)$ (vector form).`,R`$\vec r=3\hat i-2\hat j-5\hat k+\lambda(11\hat k)$`]],
'Angle &amp; <span>Shortest Distance</span>':[
 [R`Angle between lines with DRs $2,2,1$ and $4,1,8$.`,R`$\cos^{-1}\frac23$`],
 [R`Find $p$: $\frac{1-x}{3}=\frac{7y-14}{2p}=\frac{z-3}{2}$ ⟂ $\frac{7-7x}{3p}=\frac{y-5}{1}=\frac{6-z}{5}$.`,R`$p=\frac{70}{11}$`]],
'Linear <span>Programming</span>':[
 [R`Max $Z=3x+4y$; $x+y\le4$, $x,y\ge0$.`,R`16 at $(0,4)$`],
 [R`Min $Z=-3x+4y$; $x+2y\le8$, $3x+2y\le12$, $x,y\ge0$.`,R`$-12$ at $(4,0)$`],
 [R`$Z=4x+6y$ at corners $(0,2),(3,0),(6,0),(6,8),(0,5)$.`,R`Min 12 on segment $(0,2)$–$(3,0)$; max 72`]],
'Probability — <span>Conditional</span>':[
 [R`$P(A)=0.8,\ P(B)=0.5,\ P(B|A)=0.4$. Find $P(A|B)$.`,R`$\frac{0.32}{0.5}=0.64$`],
 [R`Two coins: P(both heads | at least one head).`,R`$\frac13$`],
 [R`$A,B$ independent, $P(A)=0.3,\ P(B)=0.4$. Find $P(A\cup B)$.`,R`$0.58$`],
 [R`Two cards without replacement: P(both kings).`,R`$\frac{4}{52}\cdot\frac{3}{51}=\frac{1}{221}$`]],
'Bayes’ Theorem &amp; <span>Random Variables</span>':[
 [R`Machine A makes 60% (2% defective), B makes 40% (1% defective). An item is defective: P(from A)?`,R`$\frac{0.012}{0.016}=\frac34$`],
 [R`$P(X=0)=k,\ P(X=1)=2k,\ P(X=2)=3k$. Find $k$ and $E(X)$.`,R`$k=\frac16$, $E(X)=\frac43$`],
 [R`Mean of the number on a fair die.`,R`$\frac72$`],
 [R`Is $0.1,0.5,0.2,0.1$ a probability distribution?`,R`No — the sum is 0.9`]]
};
PAGES.forEach(p=>{ const q=PRACTICE[p.title]; if(!q) return;
  p.boxes.push({c:'a',full:true,h:'Practice — board questions',x:'<div class="qs">'+q.map((a,i)=>`<div class="q"><b>Q${i+1}.</b> ${a[0]}<span class="ans">Ans: ${a[1]}</span></div>`).join('')+'</div>'});
});
const MORE={
'Application of <span>Derivatives</span>':[
 [R`Radius of a balloon grows at 2 cm/s. Rate of change of volume when $r=5$ cm?`,R`$4\pi(25)(2)=200\pi$ cm³/s`],
 [R`Cost $C(x)=0.005x^3-0.02x^2+30x+5000$. Marginal cost at $x=3$?`,R`$30.015$`]],
'Maxima &amp; <span>Minima</span>':[
 [R`Local maximum value of $xe^{-x}$.`,R`$\frac1e$ at $x=1$`],
 [R`Absolute max and min of $2x^3-15x^2+36x+1$ on $[1,5]$.`,R`Max 56 at $x=5$; min 24 at $x=1$`]],
'Integrals — <span>Standard Forms</span>':[],
'Methods of <span>Integration</span>':[],
'Differential <span>Equations</span>':[
 [R`Order and degree of $y'''+y^2+e^{y'}=0$.`,R`Order 3, degree not defined`],
 [R`Verify $y=e^x+1$ is a solution of $y''-y'=0$.`,R`$y'=y''=e^x$ ✓`]],
'Vector Algebra — <span>Basics</span>':[
 [R`Vector from $P(2,3,0)$ to $Q(-1,-2,-4)$.`,R`$-3\hat i-5\hat j-4\hat k$`],
 [R`Unit vector along $\overrightarrow{PQ}$, $P(1,2,3)$, $Q(4,5,6)$.`,R`$\frac{1}{\sqrt3}(\hat i+\hat j+\hat k)$`]],
'Dot &amp; <span>Cross Product</span>':[
 [R`Find $\lambda$ if $2\hat i+\lambda\hat j+\hat k\perp\hat i-2\hat j+3\hat k$.`,R`$\lambda=\frac52$`],
 [R`$|\vec a|=2,\ |\vec b|=3$, angle $30^\circ$. Find $|\vec a\times\vec b|$.`,R`$3$`]],
'Three Dimensional <span>Geometry</span>':[
 [R`DRs of the line joining $(-2,4,-5)$ and $(1,2,3)$.`,R`$3,-2,8$`],
 [R`Vector form of $\frac{x-5}{3}=\frac{y+4}{7}=\frac{z-6}{2}$.`,R`$\vec r=5\hat i-4\hat j+6\hat k+\lambda(3\hat i+7\hat j+2\hat k)$`],
 [R`A line has DCs $\frac{1}{\sqrt2},\frac12,\frac12$. Angle with the x-axis?`,R`$45^\circ$`],
 [R`If $l,m,n$ are DCs, $l^2+m^2+n^2=$ ?`,R`1`],
 [R`Line through the origin and $(5,-2,3)$.`,R`$\frac x5=\frac{y}{-2}=\frac z3$`],
 [R`Are lines with DRs $1,2,3$ and $-3,-6,-9$ parallel?`,R`Yes — DRs are proportional`]],
'Angle &amp; <span>Shortest Distance</span>':[
 [R`Show $\frac{x-5}{7}=\frac{y+2}{-5}=\frac z1$ ⟂ $\frac x1=\frac y2=\frac z3$.`,R`$7-10+3=0$ ✓`],
 [R`Angle between $\vec b_1=\hat i+2\hat j+2\hat k$ and $\vec b_2=3\hat i+2\hat j+6\hat k$.`,R`$\cos^{-1}\frac{19}{21}$`]],
'Probability — <span>Conditional</span>':[
 [R`$P(E)=0.6,\ P(F)=0.3,\ P(E\cap F)=0.2$. Find $P(E|F)$.`,R`$\frac23$`],
 [R`Family with 2 children: P(both boys | at least one boy).`,R`$\frac13$`]],
'Bayes’ Theorem &amp; <span>Random Variables</span>':[
 [R`Two dice: X = number of sixes. Find $E(X)$.`,R`$\frac13$`],
 [R`Bag A: 2 white, 3 red; Bag B: 4 white, 5 red. A red ball is drawn from a random bag: P(from B)?`,R`$\frac{25}{52}$`]]
};
PAGES.forEach(p=>{ const q=MORE[p.title]; if(!q) return; const bx=p.boxes[p.boxes.length-1]; const base=(bx.x.match(/class="q"/g)||[]).length;
  bx.x=bx.x.replace(/<\/div>$/, q.map((a,i)=>`<div class="q"><b>Q${base+i+1}.</b> ${a[0]}<span class="ans">Ans: ${a[1]}</span></div>`).join('')+'</div>'); });
