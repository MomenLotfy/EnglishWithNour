const A1 = [
  {
    title: "Past Simple",
    slug: "past-simple",
    explanation: "",

    exercises: [
      { q: "She ___ to the store yesterday.", opts: ["go", "goes", "went"], ans: 2 },
      { q: "They ___ football last weekend.", opts: ["play", "played", "plays"], ans: 1 }
    ]
  },
  {
    title: "Present Simple",
    slug: "present-simple",
    explanation: `<div class="grammar-explanation"><h3>${title} - Present Simple</h3><section class="grammar-section"><h4>Basic Form</h4><table class="verb-table"><tr><th>Pronoun</th><th>Form</th><th>Examples</th></tr><tr><td>I, You, We, They</td><td>Base verb</td><td>I <strong>work</strong></td></tr><tr><td>He, She, It</td><td>Verb + <strong>s</strong>/<strong>es</strong></td><td>She <strong>works</strong></td></tr></table></section><section class="grammar-section"><h4>Adding <code>s</code>/<code>es</code> Rules</h4><ul class="spelling-rules"><li><strong>Most verbs:</strong> Add <code>s</code> → <em>work → works</em></li><li><strong>Ends with s,sh,ch,x,o:</strong> Add <code>es</code> → <em>go → goes</em></li><li><strong>Ends with y + consonant:</strong> <code>ies</code> → <em>study → studies</em></li></ul></section><section class="grammar-section"><h4>Irregular Verbs</h4><div class="two-columns"><ul><li><strong>have → has</strong></li><li><strong>do → does</strong></li><li><strong>go → goes</strong></li></ul><ul><li><strong>be → am/is/are</strong></li><li><strong>say → says</strong></li></ul></div></section><section class="grammar-section"><h4>Usage</h4><div class="usage-box"><p><strong>General facts:</strong> <em>Sun rises in east.</em></p><p><strong>Habits:</strong> <em>I drink coffee.</em></p><p><strong>Schedules:</strong> <em>Train leaves at 9pm.</em></p></div><h5>Time Expressions:</h5><div class="time-expressions"><span class="time-chip">always</span><span class="time-chip">usually</span><span class="time-chip">never</span></div></section><section class="grammar-section"><h4>Negatives & Questions</h4><table class="structure-table"><tr><th>Type</th><th>Structure</th><th>Example</th></tr><tr><td>Negative</td><td>don't/doesn't + verb</td><td>They <strong>don't like</strong> it</td></tr><tr><td>Question</td><td>Do/Does + subject + verb</td><td><strong>Do</strong> you <strong>know</strong>?</td></tr></table><div class="common-mistakes"><h5>Common Mistakes:</h5><p><span class="incorrect">✖ He don't</span> → <span class="correct">✔ He doesn't</span></p></div></section></div><style>.grammar-explanation{font-family:Arial,sans-serif;line-height:1.6}.grammar-section{margin-bottom:20px;border-bottom:1px solid #eee}.verb-table,.structure-table{width:100%;border-collapse:collapse;margin:10px 0}.verb-table th,.verb-table td,.structure-table th,.structure-table td{border:1px solid #ddd;padding:8px}.two-columns{display:grid;grid-template-columns:1fr 1fr;gap:10px}.time-expressions{display:flex;flex-wrap:wrap;gap:5px;margin-top:8px}.time-chip{display:inline-block;background:#e3f2fd;padding:3px 8px;border-radius:15px;font-size:0.8em}.incorrect{color:#d32f2f;text-decoration:line-through}.correct{color:#388e3c;font-weight:bold}.common-mistakes{background:#ffebee;padding:8px;border-radius:5px}.usage-box{background:#f0f7ff;padding:8px;border-radius:5px;border-left:3px solid #64b5f6}.spelling-rules{background:#fff8e1;padding:8px 15px;border-radius:5px}</style>`,
    exercises: [
       { q: "She ____ to school every day.", opts: ["go", "goes", "going"], ans: 1 },
    { q: "I ____ coffee in the morning.", opts: ["drink", "drinks", "drinking"], ans: 0 },
    { q: "They ____ football on weekends.", opts: ["play", "plays", "playing"], ans: 0 },
    { q: "My father ____ in an office.", opts: ["work", "works", "working"], ans: 1 },
    { q: "The sun ____ in the east.", opts: ["rise", "rises", "rising"], ans: 1 },
    { q: "We ____ breakfast at 7 a.m.", opts: ["have", "has", "having"], ans: 0 },
    { q: "Water ____ at 100°C.", opts: ["boil", "boils", "boiling"], ans: 1 },
    { q: "She always ____ tea before bed.", opts: ["drink", "drinks", "drinking"], ans: 1 },
    { q: "My brother ____ in London.", opts: ["live", "lives", "living"], ans: 1 },
    { q: "I never ____ late to class.", opts: ["arrive", "arrives", "arriving"], ans: 0 },
    { q: "Cats ____ milk.", opts: ["like", "likes", "liking"], ans: 0 },
    { q: "The train ____ at 9 o’clock.", opts: ["leave", "leaves", "leaving"], ans: 1 },
    { q: "She ____ in the choir every Sunday.", opts: ["sing", "sings", "singing"], ans: 1 },
    { q: "We ____ a walk every evening.", opts: ["take", "takes", "taking"], ans: 0 },
    { q: "He ____ his homework after dinner.", opts: ["do", "does", "doing"], ans: 1 },
    { q: "Birds ____ in the sky.", opts: ["fly", "flies", "flying"], ans: 0 },
    { q: "Our teacher ____ very kind.", opts: ["is", "are", "be"], ans: 0 },
    { q: "I ____ to the gym on Mondays.", opts: ["go", "goes", "going"], ans: 0 },
    { q: "My mother ____ delicious cakes.", opts: ["make", "makes", "making"], ans: 1 },
    { q: "He ____ TV in the evening.", opts: ["watch", "watches", "watching"], ans: 1 },
    { q: "Children ____ a lot of energy.", opts: ["have", "has", "having"], ans: 0 },
    { q: "The shop ____ at 8 a.m.", opts: ["open", "opens", "opening"], ans: 1 },
    { q: "We ____ English at school.", opts: ["study", "studies", "studying"], ans: 0 },
    { q: "My uncle ____ in a bank.", opts: ["work", "works", "working"], ans: 1 },
    { q: "She ____ to music every night.", opts: ["listen", "listens", "listening"], ans: 1 },
    { q: "Dogs ____ their owners.", opts: ["love", "loves", "loving"], ans: 0 },
    { q: "I ____ books in my free time.", opts: ["read", "reads", "reading"], ans: 0 },
    { q: "The bus ____ at the same time daily.", opts: ["arrive", "arrives", "arriving"], ans: 1 },
    { q: "He ____ football very well.", opts: ["play", "plays", "playing"], ans: 1 },
    { q: "We ____ to church on Sundays.", opts: ["go", "goes", "going"], ans: 0 },
    { q: "She ____ her room every morning.", opts: ["clean", "cleans", "cleaning"], ans: 1 },
    { q: "I ____ my friends after school.", opts: ["meet", "meets", "meeting"], ans: 0 },
    { q: "Our teacher ____ English and Spanish.", opts: ["speak", "speaks", "speaking"], ans: 1 },
    { q: "The baby ____ a lot during the night.", opts: ["cry", "cries", "crying"], ans: 1 },
    { q: "We ____ lunch at school.", opts: ["eat", "eats", "eating"], ans: 0 },
    { q: "My dad ____ the car every weekend.", opts: ["wash", "washes", "washing"], ans: 1 },
    { q: "The Earth ____ around the sun.", opts: ["move", "moves", "moving"], ans: 1 },
    { q: "I ____ my homework in the afternoon.", opts: ["do", "does", "doing"], ans: 0 },
    { q: "She ____ in the park every Saturday.", opts: ["walk", "walks", "walking"], ans: 1 }
    ]
  }
];

export default A1;
