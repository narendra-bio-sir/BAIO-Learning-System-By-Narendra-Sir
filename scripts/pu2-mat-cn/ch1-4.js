/* Chapters 1–4 */
PAGES.push(
/* ---------- CH 1 ---------- */
{ch:1,title:'Relations &amp; <span>Functions</span>',pill:'Chapter 1 · Relations · Types of relations · Equivalence classes',boxes:[
 {c:'g',full:true,h:'Relation — the basics',x:R`<div class="two"><ul>
   <li>A <b>relation</b> R from A to B is any subset of $A\times B$. If $(a,b)\in R$ we write $a\,R\,b$.</li>
   <li>A relation <b>on A</b> is a subset of $A\times A$.</li>
   <li>If $n(A)=m,\ n(B)=n$ then $n(A\times B)=mn$ and the number of relations from A to B is <span class="hl">$2^{mn}$</span>.</li></ul>
   <ul><li><b>Empty relation:</b> $R=\phi$ — no element is related to any element.</li>
   <li><b>Universal relation:</b> $R=A\times A$ — every element is related to every element.</li>
   <li>Empty and universal relations are called <b>trivial relations</b>.</li></ul></div>`},
 {c:'b',full:true,h:'Reflexive · Symmetric · Transitive',x:R`<table><tr><th style="width:24mm">Type</th><th>Condition (for all elements of A)</th><th style="width:62mm">Quick test</th></tr>
   <tr><td><b>Reflexive</b></td><td>$(a,a)\in R$ for every $a\in A$</td><td>Every element is related to itself</td></tr>
   <tr><td><b>Symmetric</b></td><td>$(a,b)\in R\ \Rightarrow\ (b,a)\in R$</td><td>Every pair has its reverse pair</td></tr>
   <tr><td><b>Transitive</b></td><td>$(a,b)\in R$ and $(b,c)\in R\ \Rightarrow\ (a,c)\in R$</td><td>Every “chain” closes</td></tr></table>
   <p class="note trap">To <b>disprove</b> a property, one counter-example is enough. To <b>prove</b> it, take general elements $a,b,c$.</p>`},
 {c:'o',h:'Equivalence relation',x:R`<p>R is an <span class="hl">equivalence relation</span> if it is reflexive, symmetric <b>and</b> transitive.</p>
   <p><b>Equivalence class</b> of $a$: $[a]=\{x\in A: (x,a)\in R\}$.</p>
   <ul><li>Equivalence classes are either identical or disjoint.</li><li>Their union is the whole set A — they <b>partition</b> A.</li></ul>`},
 {c:'p',h:'Standard examples',x:R`<ul>
   <li>$R=\{(a,b): a-b \text{ divisible by } n\}$ on $\mathbb Z$ — equivalence. For $n=2$: classes are evens and odds.</li>
   <li>“is parallel to” on lines (a line taken parallel to itself) — equivalence.</li>
   <li>“$\le$” on $\mathbb R$ — reflexive, transitive, <b>not</b> symmetric.</li>
   <li>“is perpendicular to” — symmetric only.</li></ul>`},
 {c:'t',full:true,h:'Solved idea — checking all three',x:R`<p>R on $\mathbb Z$: $a\,R\,b \iff 3 \mid (a-b)$.</p>
   <div class="three"><div class="fx l"><b>Reflexive:</b> $a-a=0$ and $3\mid 0$ ✓</div><div class="fx l"><b>Symmetric:</b> $3\mid(a-b)\Rightarrow 3\mid(b-a)$ ✓</div><div class="fx l"><b>Transitive:</b> $(a-b)+(b-c)=a-c$, sum of multiples of 3 ✓</div></div>
   <p>So R is an equivalence relation with classes $[0],[1],[2]$.</p>`}
]},
{ch:1,title:'Types of <span>Functions</span>',pill:'Chapter 1 · One-one · Onto · Bijective · Counting results',boxes:[
 {c:'g',full:true,h:'Function and its types',x:R`<p>A <b>function</b> $f:A\to B$ links <b>every</b> element of A to <b>exactly one</b> element of B. A = domain, B = co-domain, $f(A)$ = range.</p>
   <table><tr><th style="width:36mm">Type</th><th>Definition</th><th style="width:52mm">Meaning</th></tr>
   <tr><td><b>One-one (injective)</b></td><td>$f(x_1)=f(x_2)\Rightarrow x_1=x_2$</td><td>Different inputs → different outputs</td></tr>
   <tr><td><b>Many-one</b></td><td>$f(x_1)=f(x_2)$ for some $x_1\ne x_2$</td><td>Not one-one</td></tr>
   <tr><td><b>Onto (surjective)</b></td><td>for every $y\in B$ there is $x\in A$ with $f(x)=y$</td><td>Range = co-domain</td></tr>
   <tr><td><b>Bijective</b></td><td>one-one <b>and</b> onto</td><td>Perfect pairing</td></tr></table>`},
 {c:'b',h:'How to check one-one',x:R`<ul><li>Assume $f(x_1)=f(x_2)$ and show $x_1=x_2$.</li><li>Graph test: every horizontal line cuts the graph <b>at most once</b>.</li><li>A strictly increasing or decreasing function is one-one.</li></ul>
   <p class="fx">$f(x)=x^2$ on $\mathbb R$: $f(2)=f(-2)$ → <b>not</b> one-one</p>`},
 {c:'o',h:'How to check onto',x:R`<ul><li>Take any $y$ in the co-domain, solve $f(x)=y$ for $x$.</li><li>If that $x$ is always in the domain, $f$ is onto.</li></ul>
   <p class="fx">$f(x)=2x+3$ on $\mathbb R$: $x=\dfrac{y-3}{2}\in\mathbb R$ → onto</p>
   <p class="note trap">$f:\mathbb N\to\mathbb N,\ f(x)=2x$ is one-one but <b>not onto</b> (odd numbers are missed).</p>`},
 {c:'p',full:true,h:'Counting results (A has m elements, B has n)',x:R`<table><tr><th>Number of…</th><th>Formula</th><th>Example $m=n=3$</th></tr>
   <tr><td>Relations from A to B</td><td>$2^{mn}$</td><td>$2^9=512$</td></tr>
   <tr><td>Functions from A to B</td><td>$n^m$</td><td>$27$</td></tr>
   <tr><td>One-one functions ($m\le n$)</td><td>$\,^{n}P_m=\dfrac{n!}{(n-m)!}$</td><td>$6$</td></tr>
   <tr><td>Bijections ($m=n$)</td><td>$n!$</td><td>$6$</td></tr>
   <tr><td>Reflexive relations on A ($n$ elements)</td><td>$2^{n^2-n}$</td><td>$2^6=64$</td></tr></table>
   <p class="note tip">For a finite set A, $f:A\to A$ is one-one $\iff$ onto. This fails for infinite sets like $\mathbb N$.</p>`},
 {c:'t',full:true,h:'Standard functions to remember',x:R`<div class="three"><div class="fx l"><b>Identity</b> $I(x)=x$ — bijective</div><div class="fx l"><b>Modulus</b> $|x|$ on $\mathbb R$ — neither one-one nor onto</div><div class="fx l"><b>Signum</b> — range $\{-1,0,1\}$, neither</div>
   <div class="fx l"><b>Greatest integer</b> $[x]$ — many-one, not onto $\mathbb R$</div><div class="fx l">$f(x)=x^3$ on $\mathbb R$ — bijective</div><div class="fx l">$f(x)=\dfrac1x$ on $\mathbb R-\{0\}$ — bijective</div></div>`}
]},
/* ---------- CH 2 ---------- */
{ch:2,title:'Inverse Trigonometric <span>Functions</span>',pill:'Chapter 2 · Domains · Principal value branches · Graph facts',boxes:[
 {c:'g',full:true,h:'Why restrict the domain?',x:R`<p>sin, cos, tan … are <b>many-one</b>, so they have no inverse on all of $\mathbb R$. We restrict each to an interval where it is one-one and onto — the <span class="hl">principal value branch</span> — and invert it there.</p>
   <p class="note trap">$\sin^{-1}x$ means the inverse function, <b>not</b> $\dfrac{1}{\sin x}$, which is $(\sin x)^{-1}=\csc x$.</p>`},
 {c:'b',full:true,h:'Domain and range (principal branch)',x:R`<table><tr><th>Function</th><th>Domain</th><th>Range (principal value)</th></tr>
   <tr><td>$\sin^{-1}x$</td><td>$[-1,1]$</td><td>$\left[-\frac{\pi}{2},\frac{\pi}{2}\right]$</td></tr>
   <tr><td>$\cos^{-1}x$</td><td>$[-1,1]$</td><td>$[0,\pi]$</td></tr>
   <tr><td>$\tan^{-1}x$</td><td>$\mathbb R$</td><td>$\left(-\frac{\pi}{2},\frac{\pi}{2}\right)$</td></tr>
   <tr><td>$\cot^{-1}x$</td><td>$\mathbb R$</td><td>$(0,\pi)$</td></tr>
   <tr><td>$\sec^{-1}x$</td><td>$\mathbb R-(-1,1)$</td><td>$[0,\pi]-\left\{\frac{\pi}{2}\right\}$</td></tr>
   <tr><td>$\csc^{-1}x$</td><td>$\mathbb R-(-1,1)$</td><td>$\left[-\frac{\pi}{2},\frac{\pi}{2}\right]-\{0\}$</td></tr></table>
   <p class="note tip">Memory hook: <b>sin, tan, cosec</b> live in the 1st &amp; 4th quadrants (around 0); <b>cos, cot, sec</b> live in the 1st &amp; 2nd quadrants (0 to π).</p>`},
 {c:'o',h:'Finding principal values',x:R`<ol style="padding-left:4mm"><li>Find the acute angle with that ratio.</li><li>Place it inside the principal range (use the sign).</li></ol>
   <div class="fx">$\sin^{-1}\!\left(-\tfrac12\right)=-\tfrac{\pi}{6}$ &nbsp;&nbsp; $\cos^{-1}\!\left(-\tfrac12\right)=\tfrac{2\pi}{3}$</div>
   <div class="fx">$\tan^{-1}(-1)=-\tfrac{\pi}{4}$ &nbsp;&nbsp; $\cot^{-1}(-1)=\tfrac{3\pi}{4}$</div>`},
 {c:'p',h:'Graph facts',x:R`<ul><li>Graph of $y=\sin^{-1}x$ is the mirror image of $y=\sin x$ (restricted) in the line $y=x$.</li><li>$\sin^{-1}x$, $\tan^{-1}x$: increasing; $\cos^{-1}x$, $\cot^{-1}x$: decreasing.</li><li>$\tan^{-1}x\to\pm\frac{\pi}{2}$ as $x\to\pm\infty$ (horizontal asymptotes).</li></ul>`}
]},
{ch:2,title:'Inverse Trig — <span>Key Results</span>',pill:'Chapter 2 · Standard identities · Values table · Solved idea',boxes:[
 {c:'g',full:true,h:'Values to know by heart',x:R`<table><tr><th>$x$</th><th>$0$</th><th>$\tfrac12$</th><th>$\tfrac{1}{\sqrt2}$</th><th>$\tfrac{\sqrt3}{2}$</th><th>$1$</th></tr>
   <tr><td>$\sin^{-1}x$</td><td>$0$</td><td>$\tfrac{\pi}{6}$</td><td>$\tfrac{\pi}{4}$</td><td>$\tfrac{\pi}{3}$</td><td>$\tfrac{\pi}{2}$</td></tr>
   <tr><td>$\cos^{-1}x$</td><td>$\tfrac{\pi}{2}$</td><td>$\tfrac{\pi}{3}$</td><td>$\tfrac{\pi}{4}$</td><td>$\tfrac{\pi}{6}$</td><td>$0$</td></tr></table>
   <table style="margin-top:1.6mm"><tr><th>$x$</th><th>$0$</th><th>$\tfrac{1}{\sqrt3}$</th><th>$1$</th><th>$\sqrt3$</th></tr>
   <tr><td>$\tan^{-1}x$</td><td>$0$</td><td>$\tfrac{\pi}{6}$</td><td>$\tfrac{\pi}{4}$</td><td>$\tfrac{\pi}{3}$</td></tr></table>`},
 {c:'b',h:'Negative arguments',x:R`<div class="fx">$\sin^{-1}(-x)=-\sin^{-1}x$</div><div class="fx">$\tan^{-1}(-x)=-\tan^{-1}x$</div><div class="fx">$\csc^{-1}(-x)=-\csc^{-1}x$</div>
   <div class="fx">$\cos^{-1}(-x)=\pi-\cos^{-1}x$</div><div class="fx">$\cot^{-1}(-x)=\pi-\cot^{-1}x$</div><div class="fx">$\sec^{-1}(-x)=\pi-\sec^{-1}x$</div>`},
 {c:'o',h:'Complementary &amp; reciprocal',x:R`<div class="fx">$\sin^{-1}x+\cos^{-1}x=\tfrac{\pi}{2}$</div><div class="fx">$\tan^{-1}x+\cot^{-1}x=\tfrac{\pi}{2}$</div><div class="fx">$\sec^{-1}x+\csc^{-1}x=\tfrac{\pi}{2}$</div>
   <div class="fx">$\sin^{-1}\tfrac1x=\csc^{-1}x$, &nbsp; $\cos^{-1}\tfrac1x=\sec^{-1}x$</div><div class="fx">$\tan^{-1}\tfrac1x=\cot^{-1}x\ \ (x>0)$</div>`},
 {c:'p',full:true,h:'Extra results — for KCET / JEE practice',x:R`<div class="two"><div class="fx">$\tan^{-1}x+\tan^{-1}y=\tan^{-1}\dfrac{x+y}{1-xy}\quad (xy<1)$</div><div class="fx">$2\tan^{-1}x=\sin^{-1}\dfrac{2x}{1+x^2}=\cos^{-1}\dfrac{1-x^2}{1+x^2}$</div>
   <div class="fx">$\sin(\sin^{-1}x)=x,\ x\in[-1,1]$</div><div class="fx">$\sin^{-1}(\sin x)=x$ only for $x\in\left[-\tfrac{\pi}{2},\tfrac{\pi}{2}\right]$</div></div>`},
 {c:'t',full:true,h:'Solved idea',x:R`<p>Find $\tan^{-1}(1)+\cos^{-1}\!\left(-\tfrac12\right)+\sin^{-1}\!\left(-\tfrac12\right)$.</p>
   <div class="fx">$=\tfrac{\pi}{4}+\tfrac{2\pi}{3}-\tfrac{\pi}{6}=\tfrac{3\pi+8\pi-2\pi}{12}=\tfrac{9\pi}{12}=\tfrac{3\pi}{4}$</div>`}
]},
/* ---------- CH 3 ---------- */
{ch:3,title:'Matrices — <span>Types &amp; Operations</span>',pill:'Chapter 3 · Order · Types · Equality · Addition · Multiplication',boxes:[
 {c:'g',full:true,h:'Matrix and order',x:R`<p>A <b>matrix</b> is a rectangular arrangement of numbers. With $m$ rows and $n$ columns its <b>order</b> is $m\times n$; it has $mn$ elements. $A=[a_{ij}]_{m\times n}$, where $a_{ij}$ is in row $i$, column $j$.</p>
   <p class="note tip">A matrix with 12 elements can have order $1\times12,\,12\times1,\,2\times6,\,6\times2,\,3\times4,\,4\times3$ — count the factor pairs.</p>`},
 {c:'b',full:true,h:'Types of matrices',x:R`<table><tr><th style="width:34mm">Type</th><th>Definition</th></tr>
   <tr><td><b>Row / Column</b></td><td>only one row ($1\times n$) / only one column ($m\times1$)</td></tr>
   <tr><td><b>Square</b></td><td>$m=n$</td></tr>
   <tr><td><b>Diagonal</b></td><td>square, $a_{ij}=0$ for $i\ne j$</td></tr>
   <tr><td><b>Scalar</b></td><td>diagonal with all diagonal elements equal ($a_{ii}=k$)</td></tr>
   <tr><td><b>Identity $I$</b></td><td>diagonal with all diagonal elements 1</td></tr>
   <tr><td><b>Zero $O$</b></td><td>all elements 0</td></tr></table>
   <p><b>Equal matrices:</b> same order and $a_{ij}=b_{ij}$ for every $i,j$ — compare element by element.</p>`},
 {c:'o',h:'Addition &amp; scalar multiple',x:R`<ul><li>$A+B$ defined only for <b>same order</b>: $(a_{ij}+b_{ij})$.</li><li>$kA=[k\,a_{ij}]$.</li><li>$A+B=B+A$, $(A+B)+C=A+(B+C)$, $k(A+B)=kA+kB$.</li><li>Additive identity $O$; additive inverse $-A$.</li></ul>`},
 {c:'p',h:'Multiplication',x:R`<p>$AB$ is defined when <span class="hl">columns of A = rows of B</span>. If A is $m\times n$, B is $n\times p$ then AB is $m\times p$.</p>
   <div class="fx">$(AB)_{ik}=\sum_{j} a_{ij}\,b_{jk}$ &nbsp;(row × column)</div>`},
 {c:'r',full:true,h:'Properties of multiplication',x:R`<div class="two"><ul><li>Associative: $(AB)C=A(BC)$</li><li>Distributive: $A(B+C)=AB+AC$</li><li>$AI=IA=A$</li></ul>
   <ul><li><b>Not commutative</b>: in general $AB\ne BA$</li><li>$AB=O$ does <b>not</b> mean $A=O$ or $B=O$</li><li>$(A+B)^2=A^2+AB+BA+B^2$ (not $A^2+2AB+B^2$)</li></ul></div>`}
]},
{ch:3,title:'Transpose · Symmetric · <span>Inverse</span>',pill:'Chapter 3 · Transpose · Symmetric and skew symmetric · Invertible matrices',boxes:[
 {c:'g',h:'Transpose',x:R`<p>$A'$ (or $A^T$): rows become columns. If A is $m\times n$, $A'$ is $n\times m$.</p>
   <div class="fx">$(A')'=A$ &nbsp; $(kA)'=kA'$</div><div class="fx">$(A+B)'=A'+B'$</div><div class="fx">$(AB)'=B'A'$ &nbsp;(order reverses)</div>`},
 {c:'b',h:'Symmetric &amp; skew symmetric',x:R`<ul><li><b>Symmetric:</b> $A'=A$, i.e. $a_{ij}=a_{ji}$.</li><li><b>Skew symmetric:</b> $A'=-A$, i.e. $a_{ij}=-a_{ji}$.</li><li>In a skew symmetric matrix all <span class="hl">diagonal elements are 0</span>.</li></ul>`},
 {c:'o',full:true,h:'Key theorems',x:R`<div class="two"><div class="fx l">For any square A: $A+A'$ is symmetric and $A-A'$ is skew symmetric.</div><div class="fx l">Every square matrix is uniquely the sum of a symmetric and a skew symmetric matrix:</div></div>
   <div class="fx">$A=\tfrac12(A+A')+\tfrac12(A-A')$</div>`},
 {c:'p',full:true,h:'Invertible matrices',x:R`<p>A square matrix A is <b>invertible</b> if there is B with $AB=BA=I$. Then $B=A^{-1}$.</p>
   <div class="three"><div class="fx">Inverse is <b>unique</b></div><div class="fx">$(AB)^{-1}=B^{-1}A^{-1}$</div><div class="fx">$(A^{-1})'=(A')^{-1}$</div></div>
   <p class="note tip">To find $A^{-1}$ in the exam, use the adjoint method from Determinants: $A^{-1}=\dfrac{1}{|A|}\,\text{adj}\,A$.</p>`},
 {c:'t',full:true,h:'Solved idea — express as symmetric + skew symmetric',x:R`<p>$A=\begin{bmatrix}3&5\\1&-1\end{bmatrix}$, &nbsp; $A'=\begin{bmatrix}3&1\\5&-1\end{bmatrix}$</p>
   <div class="fx">$P=\tfrac12(A+A')=\begin{bmatrix}3&3\\3&-1\end{bmatrix}$ (symmetric), &nbsp; $Q=\tfrac12(A-A')=\begin{bmatrix}0&2\\-2&0\end{bmatrix}$ (skew), &nbsp; $P+Q=A$ ✓</div>`}
]},
/* ---------- CH 4 ---------- */
{ch:4,title:'Determinants — <span>Basics &amp; Area</span>',pill:'Chapter 4 · Determinant of order 1, 2, 3 · Area of a triangle',boxes:[
 {c:'g',full:true,h:'Determinant of a square matrix',x:R`<div class="two"><div class="fx">$\begin{vmatrix}a&b\\c&d\end{vmatrix}=ad-bc$</div><div class="fx">$|[a]|=a$ &nbsp;(order 1)</div></div>
   <div class="fx">$\begin{vmatrix}a_1&b_1&c_1\\a_2&b_2&c_2\\a_3&b_3&c_3\end{vmatrix}=a_1(b_2c_3-b_3c_2)-b_1(a_2c_3-a_3c_2)+c_1(a_2b_3-a_3b_2)$</div>
   <p class="note tip">Expand along the row or column with the <b>most zeros</b>. Sign pattern: $\begin{smallmatrix}+&-&+\\-&+&-\\+&-&+\end{smallmatrix}$</p>`},
 {c:'b',h:'Useful facts',x:R`<ul><li>Only <b>square</b> matrices have determinants.</li><li>For A of order n: <span class="hl">$|kA|=k^n|A|$</span>.</li><li>$|AB|=|A|\,|B|$, &nbsp; $|A'|=|A|$.</li><li>$|A^{-1}|=\dfrac{1}{|A|}$.</li></ul>`},
 {c:'o',h:'Extra — properties (KCET)',x:R`<ul><li>Two equal (or proportional) rows → value 0.</li><li>Swapping two rows changes the sign.</li><li>A common factor of a row can be taken out.</li><li>$R_i\to R_i+kR_j$ leaves the value unchanged.</li></ul>`},
 {c:'p',full:true,h:'Area of a triangle',x:R`<div class="fx">$\Delta=\dfrac12\begin{vmatrix}x_1&y_1&1\\x_2&y_2&1\\x_3&y_3&1\end{vmatrix}$ &nbsp; (take the absolute value)</div>
   <ul><li>Three points are <b>collinear</b> $\iff$ this determinant is 0.</li><li><b>Equation of the line</b> through $(x_1,y_1),(x_2,y_2)$: put $(x,y)$ as the third point and set the determinant to 0.</li></ul>
   <p class="note trap">If the area is given, use $\pm$ — the determinant can be positive or negative, so you get two values of $k$.</p>`},
 {c:'t',full:true,h:'Solved idea',x:R`<p>Area of the triangle with vertices $(1,0),(6,0),(4,3)$:</p>
   <div class="fx">$\Delta=\tfrac12\begin{vmatrix}1&0&1\\6&0&1\\4&3&1\end{vmatrix}=\tfrac12\big[1(0-3)-0+1(18-0)\big]=\tfrac12(15)=\tfrac{15}{2}$ sq. units</div>`}
]},
{ch:4,cls:'tight',title:'Adjoint, Inverse &amp; <span>Linear Equations</span>',pill:'Chapter 4 · Minors · Cofactors · Adjoint · Inverse · Matrix method',boxes:[
 {c:'g',h:'Minor &amp; cofactor',x:R`<ul><li><b>Minor</b> $M_{ij}$: determinant left after deleting row $i$ and column $j$.</li><li><b>Cofactor</b> <span class="hl">$A_{ij}=(-1)^{i+j}M_{ij}$</span>.</li><li>$|A|=$ sum of (elements of any row) × (their cofactors).</li><li>Elements of a row × cofactors of <b>another</b> row = 0.</li></ul>`},
 {c:'b',h:'Adjoint',x:R`<p>$\text{adj}\,A$ = transpose of the cofactor matrix.</p>
   <div class="fx">$A(\text{adj}A)=(\text{adj}A)A=|A|\,I$</div>
   <div class="fx l">2×2 shortcut: $\begin{bmatrix}a&b\\c&d\end{bmatrix}\to\text{adj}=\begin{bmatrix}d&-b\\-c&a\end{bmatrix}$ — swap the diagonal, change the sign of the others.</div>`},
 {c:'o',full:true,h:'Inverse',x:R`<div class="two"><div class="fx">$A^{-1}=\dfrac{1}{|A|}\,\text{adj}\,A$</div><div class="fx l"><b>Singular:</b> $|A|=0$ (no inverse) &nbsp;·&nbsp; <b>Non-singular:</b> $|A|\ne0$ (invertible)</div></div>
   <div class="three" style="margin-top:1.6mm"><div class="fx">$|\text{adj}A|=|A|^{n-1}$</div><div class="fx">$\text{adj}(AB)=\text{adj}B\cdot\text{adj}A$</div><div class="fx">$(AB)^{-1}=B^{-1}A^{-1}$</div></div>`},
 {c:'p',full:true,h:'Solving linear equations — matrix method',x:R`<p>Write the system as $AX=B$. If $|A|\ne0$: <span class="hl">$X=A^{-1}B$</span> — unique solution (consistent).</p>
   <table><tr><th>Case</th><th>Result</th></tr>
   <tr><td>$|A|\ne0$</td><td>Unique solution, consistent</td></tr>
   <tr><td>$|A|=0$ and $(\text{adj}A)B\ne O$</td><td>No solution — inconsistent</td></tr>
   <tr><td>$|A|=0$ and $(\text{adj}A)B=O$</td><td>Infinitely many solutions or none — check further</td></tr></table>`},
 {c:'t',full:true,h:'Solved idea — 6-mark pattern',x:R`<p>Solve $x+y+z=6,\ y+3z=11,\ x-2y+z=0$.</p>
   <div class="fx l">$A=\begin{bmatrix}1&1&1\\0&1&3\\1&-2&1\end{bmatrix}$, &nbsp; $|A|=1(1+6)-1(0-3)+1(0-1)=9\ne0$</div>
   <div class="fx l">adj $A=\begin{bmatrix}7&-3&2\\3&0&-3\\-1&3&1\end{bmatrix}$, &nbsp; $X=\tfrac19\,\text{adj}A\begin{bmatrix}6\\11\\0\end{bmatrix}=\tfrac19\begin{bmatrix}9\\18\\27\end{bmatrix}$ → $x=1,\ y=2,\ z=3$</div>`}
]}
);
