import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Zap, GitBranch, Layers, Workflow, Code, Terminal, ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  return (
    <div className="code-block overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-code-border bg-code-bg/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive/80" />
            <div className="w-3 h-3 rounded-full bg-[hsl(45_100%_60%)]" />
            <div className="w-3 h-3 rounded-full bg-[hsl(140_70%_50%)]" />
          </div>
          <span className="text-xs text-muted-foreground font-mono ml-2">{language}</span>
        </div>
        <Terminal className="w-4 h-4 text-muted-foreground" />
      </div>
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
        <code dangerouslySetInnerHTML={{ __html: code }} />
      </pre>
    </div>
  );
};

const AngularExpertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeDemo, setActiveDemo] = useState("signals");

  const demos = {
    signals: {
      title: "Angular Signals",
      description: "Modern reactive state management with fine-grained reactivity",
      code: `<span class="code-comment">// signals.component.ts</span>
<span class="code-keyword">import</span> { Component, signal, computed, effect } <span class="code-keyword">from</span> <span class="code-string">'@angular/core'</span>;

<span class="code-keyword">@Component</span>({
  selector: <span class="code-string">'app-counter'</span>,
  standalone: <span class="code-keyword">true</span>,
  template: <span class="code-string">\`
    &lt;div class="counter"&gt;
      &lt;h2&gt;Count: {{ count() }}&lt;/h2&gt;
      &lt;p&gt;Double: {{ doubleCount() }}&lt;/p&gt;
      &lt;button (click)="increment()"&gt;+&lt;/button&gt;
    &lt;/div&gt;
  \`</span>
})
<span class="code-keyword">export class</span> <span class="code-function">CounterComponent</span> {
  <span class="code-comment">// Writable signal</span>
  count = <span class="code-function">signal</span>(<span class="code-variable">0</span>);
  
  <span class="code-comment">// Computed signal - automatically updates</span>
  doubleCount = <span class="code-function">computed</span>(() => <span class="code-keyword">this</span>.count() * <span class="code-variable">2</span>);
  
  <span class="code-keyword">constructor</span>() {
    <span class="code-comment">// Effect runs when signals change</span>
    <span class="code-function">effect</span>(() => {
      console.log(<span class="code-string">\`Count changed: \${this.count()}\`</span>);
    });
  }
  
  <span class="code-function">increment</span>() {
    <span class="code-keyword">this</span>.count.<span class="code-function">update</span>(c => c + <span class="code-variable">1</span>);
  }
}`,
      benefits: [
        "Fine-grained reactivity without zone.js",
        "Automatic dependency tracking",
        "Better performance than RxJS for simple state",
        "Cleaner syntax than BehaviorSubject",
      ],
    },
    forms: {
      title: "Reactive Forms",
      description: "Type-safe, validated forms with async validation",
      code: `<span class="code-comment">// user-form.component.ts</span>
<span class="code-keyword">import</span> { Component, inject } <span class="code-keyword">from</span> <span class="code-string">'@angular/core'</span>;
<span class="code-keyword">import</span> { FormBuilder, Validators, ReactiveFormsModule } <span class="code-keyword">from</span> <span class="code-string">'@angular/forms'</span>;

<span class="code-keyword">@Component</span>({
  selector: <span class="code-string">'app-user-form'</span>,
  standalone: <span class="code-keyword">true</span>,
  imports: [ReactiveFormsModule],
})
<span class="code-keyword">export class</span> <span class="code-function">UserFormComponent</span> {
  <span class="code-keyword">private</span> fb = <span class="code-function">inject</span>(FormBuilder);
  
  <span class="code-comment">// Typed reactive form</span>
  userForm = <span class="code-keyword">this</span>.fb.group({
    name: [<span class="code-string">''</span>, [Validators.required, Validators.minLength(<span class="code-variable">3</span>)]],
    email: [<span class="code-string">''</span>, [Validators.required, Validators.email]],
    password: [<span class="code-string">''</span>, [
      Validators.required,
      Validators.minLength(<span class="code-variable">8</span>),
      <span class="code-keyword">this</span>.passwordStrengthValidator
    ]],
    confirmPassword: [<span class="code-string">''</span>, Validators.required],
  }, { validators: <span class="code-keyword">this</span>.passwordMatchValidator });

  <span class="code-comment">// Custom validator</span>
  <span class="code-function">passwordStrengthValidator</span>(control: AbstractControl) {
    <span class="code-keyword">const</span> hasNumber = /\\d/.test(control.value);
    <span class="code-keyword">const</span> hasUpper = /[A-Z]/.test(control.value);
    <span class="code-keyword">return</span> hasNumber && hasUpper ? <span class="code-keyword">null</span> : { weak: <span class="code-keyword">true</span> };
  }
  
  <span class="code-comment">// Async validator</span>
  <span class="code-function">emailExistsValidator</span> = (ctrl: AbstractControl) =>
    <span class="code-keyword">this</span>.userService.checkEmail(ctrl.value).pipe(
      map(exists => exists ? { emailTaken: <span class="code-keyword">true</span> } : <span class="code-keyword">null</span>)
    );
}`,
      benefits: [
        "Strongly typed FormGroup and FormControl",
        "Custom sync and async validators",
        "Cross-field validation",
        "Programmatic form building",
      ],
    },
    rxjs: {
      title: "RxJS Patterns",
      description: "Advanced reactive patterns for complex data flows",
      code: `<span class="code-comment">// data.service.ts</span>
<span class="code-keyword">import</span> { Injectable, inject } <span class="code-keyword">from</span> <span class="code-string">'@angular/core'</span>;
<span class="code-keyword">import</span> { HttpClient } <span class="code-keyword">from</span> <span class="code-string">'@angular/common/http'</span>;
<span class="code-keyword">import</span> { switchMap, shareReplay, catchError, retry } <span class="code-keyword">from</span> <span class="code-string">'rxjs/operators'</span>;

<span class="code-keyword">@Injectable</span>({ providedIn: <span class="code-string">'root'</span> })
<span class="code-keyword">export class</span> <span class="code-function">DataService</span> {
  <span class="code-keyword">private</span> http = <span class="code-function">inject</span>(HttpClient);
  
  <span class="code-comment">// Cached data stream with shareReplay</span>
  users$ = <span class="code-keyword">this</span>.http.get&lt;User[]&gt;(<span class="code-string">'/api/users'</span>).pipe(
    <span class="code-function">retry</span>({ count: <span class="code-variable">3</span>, delay: <span class="code-variable">1000</span> }),
    <span class="code-function">shareReplay</span>({ bufferSize: <span class="code-variable">1</span>, refCount: <span class="code-keyword">true</span> }),
    <span class="code-function">catchError</span>(<span class="code-keyword">this</span>.handleError)
  );
  
  <span class="code-comment">// Search with switchMap (cancels previous requests)</span>
  <span class="code-function">search</span>(term$: Observable&lt;string&gt;) {
    <span class="code-keyword">return</span> term$.pipe(
      <span class="code-function">debounceTime</span>(<span class="code-variable">300</span>),
      <span class="code-function">distinctUntilChanged</span>(),
      <span class="code-function">switchMap</span>(term => 
        <span class="code-keyword">this</span>.http.get&lt;Result[]&gt;(<span class="code-string">\`/api/search?q=\${term}\`</span>)
      )
    );
  }
  
  <span class="code-comment">// Combine multiple streams</span>
  dashboardData$ = <span class="code-function">combineLatest</span>([
    <span class="code-keyword">this</span>.users$,
    <span class="code-keyword">this</span>.stats$,
    <span class="code-keyword">this</span>.notifications$
  ]).pipe(
    <span class="code-function">map</span>(([users, stats, notifications]) => ({
      users, stats, notifications, loadedAt: <span class="code-keyword">new</span> Date()
    }))
  );
}`,
      benefits: [
        "switchMap for search/autocomplete",
        "shareReplay for caching",
        "combineLatest for complex state",
        "Error handling with retry",
      ],
    },
    architecture: {
      title: "Architecture",
      description: "Microfrontend & monorepo patterns for scale",
      code: `<span class="code-comment">// Monorepo Structure (Nx Workspace)</span>
<span class="code-variable">apps/</span>
├── <span class="code-function">shell/</span>           <span class="code-comment"># Main container app</span>
├── <span class="code-function">mfe-auth/</span>        <span class="code-comment"># Auth microfrontend</span>
├── <span class="code-function">mfe-dashboard/</span>   <span class="code-comment"># Dashboard microfrontend</span>
└── <span class="code-function">mfe-reports/</span>     <span class="code-comment"># Reports microfrontend</span>

<span class="code-variable">libs/</span>
├── <span class="code-function">shared/</span>
│   ├── ui/          <span class="code-comment"># Shared components</span>
│   ├── utils/       <span class="code-comment"># Common utilities</span>
│   └── data-access/ <span class="code-comment"># API services</span>
├── <span class="code-function">feature/</span>
│   ├── auth/        <span class="code-comment"># Auth feature lib</span>
│   └── dashboard/   <span class="code-comment"># Dashboard feature lib</span>
└── <span class="code-function">domain/</span>
    └── models/      <span class="code-comment"># Shared interfaces</span>

<span class="code-comment">// Module Federation Config</span>
<span class="code-keyword">const</span> config = {
  name: <span class="code-string">'shell'</span>,
  remotes: {
    mfeAuth: <span class="code-string">'mfeAuth@http://localhost:4201/remoteEntry.js'</span>,
    mfeDashboard: <span class="code-string">'mfeDashboard@http://localhost:4202/remoteEntry.js'</span>,
  },
  shared: {
    <span class="code-string">'@angular/core'</span>: { singleton: <span class="code-keyword">true</span>, strictVersion: <span class="code-keyword">true</span> },
    <span class="code-string">'@angular/router'</span>: { singleton: <span class="code-keyword">true</span>, strictVersion: <span class="code-keyword">true</span> },
  }
};`,
      benefits: [
        "Independent deployment per team",
        "Shared libraries for consistency",
        "Lazy-loaded microfrontends",
        "40% faster deployments",
      ],
    },
  };

  const skills = [
    { name: "Signals", icon: Zap, color: "primary" },
    { name: "RxJS", icon: GitBranch, color: "angular" },
    { name: "Standalone Components", icon: Layers, color: "primary" },
    { name: "Microfrontends", icon: Workflow, color: "angular" },
  ];

  type DemoKey = keyof typeof demos;

  return (
    <section id="expertise" className="py-24 sm:py-32 relative bg-secondary/30" ref={ref}>
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-radial from-angular/10 via-transparent to-transparent" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-angular font-mono text-sm tracking-wider uppercase mb-4">
            Technical Showcase
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-angular">Angular</span> Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Deep expertise in Angular's latest features, from Signals to Microfrontends. 
            Explore interactive code demos showcasing production-ready patterns.
          </p>
        </motion.div>

        {/* Skills pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`badge-tech ${skill.color === "angular" ? "badge-angular" : ""}`}
            >
              <skill.icon className="w-4 h-4" />
              {skill.name}
            </div>
          ))}
        </motion.div>

        {/* Interactive Demo Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Tabs defaultValue="signals" className="w-full" onValueChange={(v) => setActiveDemo(v)}>
            <TabsList className="w-full flex flex-wrap h-auto gap-2 bg-transparent p-0 mb-8 justify-center">
              {Object.entries(demos).map(([key, demo]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="data-[state=active]:bg-secondary data-[state=active]:border-primary/50 data-[state=active]:shadow-lg data-[state=active]:shadow-primary/10 border border-border rounded-lg px-4 py-2 transition-all"
                >
                  <Code className="w-4 h-4 mr-2" />
                  {demo.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(demos).map(([key, demo]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="grid lg:grid-cols-5 gap-8">
                  {/* Code Block */}
                  <div className="lg:col-span-3">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CodeBlock code={demo.code} language="typescript" />
                    </motion.div>
                  </div>

                  {/* Benefits */}
                  <div className="lg:col-span-2 space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="font-display text-xl font-semibold mb-2">{demo.title}</h3>
                      <p className="text-muted-foreground mb-6">{demo.description}</p>
                      
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                          Key Benefits
                        </h4>
                        {demo.benefits.map((benefit, index) => (
                          <motion.div
                            key={benefit}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.4 }}
                            className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border"
                          >
                            <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default AngularExpertise;
