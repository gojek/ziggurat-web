(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{hS8w:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return i}));var n=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),l=a("hhGP"),c=(a("qKvR"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/Streaming-Frameworks-Comparison.mdx"}});var o={_frontmatter:c},s=l.a;function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)(s,Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"streaming-frameworks-comparison"},"Streaming Frameworks Comparison"),Object(b.b)("hr",null),Object(b.b)("p",null,"Let's Understand some of the terminologies first. "),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Dedicated Cluster"),"\nCertain Frameworks run on dedicated infrastructure, that is not part of the domain logic. They typically accept tasks or jobs (i.e. the domain logic) and run that on the infrastructure."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Windowing"),"\nWindowing lets you control how to group records that have the same key for stateful operations such as ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://kafka.apache.org/20/documentation/streams/developer-guide/dsl-api.html#streams-developer-guide-dsl-aggregating"}),"aggregations")," or ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://kafka.apache.org/20/documentation/streams/developer-guide/dsl-api.html#streams-developer-guide-dsl-joins"}),"joins")," into so-called windows. Windows are tracked per record key."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"State Management"),"\n(write some more)\nSome frameworks support in-memory databases that can be used to build up cache (that, in turn, make the app stateful)"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Low Latency"),"\nWith stream processing, we have to work with the problem of eventual consistency. This could lead to high latency when the load is high and the processing is slow.\nThe framework also should support stream processing\nFor real-time processing, we need latency guarantees and thus the ability to scale up consumers."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Coupled With Kafka"),"\nFor stream processing frameworks there can be multiple input sources of streams that they operate upon.\nZiggurat and Samza support only Kafka as the data source right now. While frameworks like storm support Kafka, AWS kinesis, RabbitMQ as well."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Independent Retries"),"\nWhenever the processing of a message fails while processing the stream, some use cases require us to retry the message instead of skipping it. We also don’t wish to block the stream processing until the processing succeeds, so we need a mechanism that supports retries with a backoff.\nZiggurat supports that with a set of retry queues in RabbitMQ."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"API Server"),"\nWith Independent retries and dead-set, the need for a web server emerges. Along with that, it can also give an interface to add custom routes on the API-server(managed by the framework)."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Async Processing of Messages"),"\nKafka Streams has a limitation on the number of consumers that can run in parallel (it can not be more than the number of partitions in that topic). To get over this limitation ziggurat introduces async processing of messages by sinking the messages into Rabbitmq and reading with the required number of consumers from Rabbitmq (Rabbitmq has not logically limit on the number of consumers).\nOther frameworks that support sources of input other than Kafka might not need to tackle this issue at all."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Storm"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Spark"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Flink"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Ziggurat"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Samza"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dedicated Cluster"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Windowing"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"State Management"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Low Latency"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Coupled With Kafka"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Independent Retries"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"API server"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Async Processing of Messages"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maybe based on input source"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maybe based on input source"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maybe based on input source"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))))}void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/Streaming-Frameworks-Comparison.mdx"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-streaming-frameworks-comparison-mdx-bf60363311ad157ebcb3.js.map