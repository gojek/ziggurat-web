(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"3HLV":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return o}));var l=a("wx14"),i=a("zLVn"),n=(a("q1tI"),a("7ljp")),b=a("hhGP"),r=(a("qKvR"),{});void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/Release-Notes.mdx"}});var c={_frontmatter:r},s=b.a;function o(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)(s,Object(l.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"changelog"},"Changelog"),Object(n.b)("p",null,"All notable changes to this project will be documented in this file. This change log follows the conventions of ",Object(n.b)("a",Object(l.a)({parentName:"p"},{href:"http://keepachangelog.com/"}),"keepachangelog.com"),"."),Object(n.b)("h2",{id:"3140"},"3.14.0"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Upgrade kafka-streams library to 2.8.0"),Object(n.b)("li",{parentName:"ul"},"Replaced ",Object(n.b)("inlineCode",{parentName:"li"},":ziggurat :datadog")," configuration in favour of ",Object(n.b)("inlineCode",{parentName:"li"},":ziggurat :statsd")),Object(n.b)("li",{parentName:"ul"},"Removed the default state-store which was created at the time of Kafka Streams initialization")),Object(n.b)("h2",{id:"3130"},"3.13.0"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Supports all of the official Kafka configurations for ",Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://docs.confluent.io/platform/current/installation/configuration/streams-configs.html"}),"Streams API"),", ",Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://docs.confluent.io/platform/current/installation/configuration/consumer-configs.html"}),"Consumer API")," and ",Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://docs.confluent.io/platform/current/installation/configuration/producer-configs.html"}),"Producer API"))),Object(n.b)("h2",{id:"3120"},"3.12.0"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Uses Kafka Streams client 2.7.0"),Object(n.b)("li",{parentName:"ul"},"Introduces default.api.timeout.ms for Kafka Consumer API")),Object(n.b)("h2",{id:"3110"},"3.11.0"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Uses Kafka Streams client 2.5.0")),Object(n.b)("h2",{id:"3100"},"3.10.0"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Uses Kafka Streams client 2.4.1")),Object(n.b)("h2",{id:"390"},"3.9.0"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Added support for handling uncaught exceptions in Kafka Streams using ",Object(n.b)("inlineCode",{parentName:"li"},":enable-stream-restart-on-uncaught-exception"))),Object(n.b)("h2",{id:"381"},"3.8.1"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Added support for Kafka Consumer config ",Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://docs.confluent.io/platform/current/installation/configuration/consumer-configs.html#consumerconfigs_default.api.timeout.ms"}),"default.api.timeout.ms")," for Kafka Streams")),Object(n.b)("h2",{id:"371"},"3.7.1"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Strict type checking for batch handler return type. Application is stopped if the type does not match the expected.   ")),Object(n.b)("h2",{id:"370"},"3.7.0"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Added support to flatten protobuf-struct during deserialization")),Object(n.b)("h2",{id:"362"},"3.6.2"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Validation of stream and batch route arguments against the configuration, when starting the application.")),Object(n.b)("h2",{id:"361"},"3.6.1"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Changed the logic for committing offsets to only commit only when non-zero records are polled while\nconsuming via Kafka Consumer API")),Object(n.b)("h2",{id:"360"},"3.6.0"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Error reporting done to newrelic along with sentry.")),Object(n.b)("h2",{id:"353"},"3.5.3"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Refactored and simplified the code for retrying, publishing and consuming using RabbitMQ."),Object(n.b)("li",{parentName:"ul"},"The config ",Object(n.b)("inlineCode",{parentName:"li"},"{:messaging {:constructor")," has been removed from ",Object(n.b)("inlineCode",{parentName:"li"},":ziggurat")," config space"),Object(n.b)("li",{parentName:"ul"},"Both, ",Object(n.b)("inlineCode",{parentName:"li"},"{:ziggurat :rabbit-mq-connection {:hosts"),"  and ",Object(n.b)("inlineCode",{parentName:"li"},"{:ziggurat :rabbit-mq-connection {:host")," configs\nare accepted for connecting to RabbitMQ. But, ",Object(n.b)("inlineCode",{parentName:"li"},":hosts")," is preferred over ",Object(n.b)("inlineCode",{parentName:"li"},":host"),". ",Object(n.b)("inlineCode",{parentName:"li"},":hosts")," should be used\nto define cluster hosts."),Object(n.b)("li",{parentName:"ul"},"defrecord ",Object(n.b)("inlineCode",{parentName:"li"},"ziggurat.mapper.MessagePayload")," has been added back to preserve backward compatibility"),Object(n.b)("li",{parentName:"ul"},"Fixed a bug in calculation of exponential backoff timeout where casting the timeout to integer\nwas throwing an IllegalArgumentException  ")),Object(n.b)("h2",{id:"352"},"3.5.2"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},'If there\'s an exception in the batch handler function, the failure metrics is published with a count of "total batch\nsize" (which was being processed by the function) instead of just 1 as was being done before this change. ')),Object(n.b)("h2",{id:"351"},"3.5.1"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixed publishing of metrics for batch consumption"),Object(n.b)("li",{parentName:"ul"},"Fixed the startup logic for batch consumption - only routes provided in Ziggurat init-args will be started"),Object(n.b)("li",{parentName:"ul"},"Standardized naming for Kafka Consumer API configs")),Object(n.b)("h2",{id:"350"},"3.5.0"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Adds support for consuming Kafka messages in batches using Kafka Consumer API"),Object(n.b)("li",{parentName:"ul"},"Fixes the logic during RabbitMQ disconnection - Ziggurat now retries (publishing a message)\ninfinitely till RMQ recovers. This changes the present behaviour where Kafka Streams were being stopped\nduring disconnection with RabbitMQ.")),Object(n.b)("h2",{id:"342-alpha4"},"3.4.2-alpha.4"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Log metadata thru sentry")),Object(n.b)("h2",{id:"342-alpha3"},"3.4.2-alpha.3"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fix project version")),Object(n.b)("h2",{id:"342-alpha2"},"3.4.2-alpha.2"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Log the stream record metadata")),Object(n.b)("h2",{id:"342-alpha1"},"3.4.2-alpha.1"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Investigate if transform() affects how stream joins behave")),Object(n.b)("h2",{id:"342"},"3.4.2"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixes issue ",Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/gojek/ziggurat/issues/56"}),"#56")),Object(n.b)("li",{parentName:"ul"},"Adds functionality to stop and restart KafkaStreams using nREPL.")),Object(n.b)("h2",{id:"341"},"3.4.1"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixes issue ",Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/gojek/ziggurat/issues/142"}),"#142")),Object(n.b)("li",{parentName:"ul"},"Adds improved error message responses for Deadset API calls")),Object(n.b)("h2",{id:"340---2020-08-21"},"3.4.0 - 2020-08-21"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Releases Stable Ziggurat version with support for RabbitMQ clusters"),Object(n.b)("li",{parentName:"ul"},"Upgraded the Kafka Streams library to 2.3.0")),Object(n.b)("h2",{id:"331-alpha10---2020-08-19"},"3.3.1-alpha.10 - 2020-08-19"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Moves stream joins behind an alpha feature flag")),Object(n.b)("h2",{id:"331-alpha9---2020-08-07"},"3.3.1-alpha.9 - 2020-08-07"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Defaults RabbitMQ queue replication to ",Object(n.b)("inlineCode",{parentName:"li"},"(n/2) + 1")," nodes, where ",Object(n.b)("inlineCode",{parentName:"li"},"n")," is the number of nodes in the cluster")),Object(n.b)("h2",{id:"331-alpha8---2020-07-27"},"3.3.1-alpha.8 - 2020-07-27"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixes false positive exception thrown by messaging when an actor abnormally terminates")),Object(n.b)("h2",{id:"331-alpha7---2020-07-23"},"3.3.1-alpha.7 - 2020-07-23"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Remove defrecord wrappers")),Object(n.b)("h2",{id:"331-alpha6---2020-07-18"},"3.3.1-alpha.6 - 2020-07-18"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Uses default ha-config values if nothing is provided")),Object(n.b)("h2",{id:"331-alpha5---2020-07-06"},"3.3.1-alpha.5 - 2020-07-06"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Adds RabbitMQMessaging implementation to support connection with RabbitMQ clusters"),Object(n.b)("li",{parentName:"ul"},"Adds support for setting up HA policies for queues and exchanges")),Object(n.b)("h2",{id:"331-alpha4---2020-07-02"},"3.3.1-alpha.4 - 2020-07-02"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Removes the use of the old protobuf library in favor of the new one")),Object(n.b)("h2",{id:"331-alpha3---2020-06-29"},"3.3.1-alpha.3 - 2020-06-29"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Makes messaging implementation configurable"),Object(n.b)("li",{parentName:"ul"},"Adds a new protocol for Messaging")),Object(n.b)("h2",{id:"331-alpha2---2020-06-23"},"3.3.1-alpha.2 - 2020-06-23"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Refactors rabbitmq specific logic to the messaging.rabbitmq package"),Object(n.b)("li",{parentName:"ul"},"Adds unit tests for rabbitmq specific namespaces"),Object(n.b)("li",{parentName:"ul"},"Adds test annotations to messaging integration tests")),Object(n.b)("h2",{id:"331-alpha1---2020-06-18"},"3.3.1-alpha.1 - 2020-06-18"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Support for Kafka Stream KStream-KStream Join")),Object(n.b)("h2",{id:"331---2020-06-17"},"3.3.1 - 2020-06-17"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Introduces a swagger middleware on the HTTP server.")),Object(n.b)("h2",{id:"330---2020-05-26"},"3.3.0 - 2020-05-26"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Makes metrics library configurable, exposes a metrics interface and provides an\nimplementation for clj-statsd library."),Object(n.b)("li",{parentName:"ul"},"Uses clojusc protobuf in place of flatland protobuf for deserializing proto messages"),Object(n.b)("li",{parentName:"ul"},"Adds support for all configurations of kafka-producer.")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"(for a more details list of changes look at the changelogs of 3.3.0-alpha. entries)")),Object(n.b)("h2",{id:"330-alpha8---2020-05-19"},"3.3.0-alpha.8 - 2020-05-19"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Adding support for all configurations supported by Kafka Producer")),Object(n.b)("h2",{id:"330-alpha7---2020-05-07"},"3.3.0-alpha.7 - 2020-05-07"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Remove ",Object(n.b)("inlineCode",{parentName:"li"},'[org.flatland/protobuf "0.8.1"]')," from test dependencies")),Object(n.b)("h2",{id:"330-alpha6---2020-05-07"},"3.3.0-alpha.6 - 2020-05-07"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixes ",Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/gojek/ziggurat/issues/144"}),"Issue")),Object(n.b)("li",{parentName:"ul"},"Adds alpha feature flags")),Object(n.b)("h2",{id:"330-alpha5---2020-04-28"},"3.3.0-alpha.5 - 2020-04-28"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Makes metrics implementation configurable"),Object(n.b)("li",{parentName:"ul"},'passes "all" metric-name to update timing for all metrics'),Object(n.b)("li",{parentName:"ul"},"Adds docs for MetricsProtocol")),Object(n.b)("h2",{id:"330-alpha4---2020-04-26"},"3.3.0-alpha.4 - 2020-04-26"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Defines an interface for metrics."),Object(n.b)("li",{parentName:"ul"},"Changes the dropwizard implementation to use the metrics interface"),Object(n.b)("li",{parentName:"ul"},"Adds a metrics interface implementation for clj-statsd library.")),Object(n.b)("h2",{id:"330-alpha3---2020-04-22"},"3.3.0-alpha.3 - 2020-04-22"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixes metrics initialization")),Object(n.b)("h2",{id:"330-alpha2---2020-04-21"},"3.3.0-alpha.2 - 2020-04-21"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Refactors Metrics.clj"),Object(n.b)("li",{parentName:"ul"},"Moves dropwizard metrics logic to its own namespace"),Object(n.b)("li",{parentName:"ul"},"Moves statsd state (transport and reporter) to dropwizard namespace")),Object(n.b)("h2",{id:"323---2020-04-21"},"3.2.3 - 2020-04-21"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Removes wrap-with-metrics middleware from HTTP router")),Object(n.b)("h2",{id:"322---2020-04-14"},"3.2.2 - 2020-04-14"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixes bug ",Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/gojek/ziggurat/issues/28"}),"Issue"),"\nto avoid confusion between datadog and statsd")),Object(n.b)("h2",{id:"321---2020-03-23"},"3.2.1 - 2020-03-23"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixes bug for this ",Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/gojek/ziggurat/issues/131"}),"Issue")),Object(n.b)("li",{parentName:"ul"},"Releases metrics for http requests in a stable release")),Object(n.b)("h2",{id:"330-alpha1---2020-01-24"},"3.3.0-alpha.1 - 2020-01-24"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Added metrics for recording http requests served")),Object(n.b)("h2",{id:"320---2020-01-09"},"3.2.0 - 2020-01-09"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Changes Exponential backoff config contract.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Adds a ",Object(n.b)("inlineCode",{parentName:"li"},":type")," key to retry-config"),Object(n.b)("li",{parentName:"ul"},"Adds a limit on the number of retries possible in exponential backoff"),Object(n.b)("li",{parentName:"ul"},"Releasing exponential backoff as an alpha feature"))),Object(n.b)("li",{parentName:"ul"},"Fixes ",Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/gojek/ziggurat/issues/136"}),"issue")," where dead-set replay doesn't send the message to the retry-flow"),Object(n.b)("li",{parentName:"ul"},"Fixes ",Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/gojek/ziggurat/issues/129"}),"issue")," by updating tools.nrepl dependency to nrepl/nrepl"),Object(n.b)("li",{parentName:"ul"},"Fixes ",Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/gojek/ziggurat/issues/133"}),"this bug")," where dead set replay broke on Ziggurat upgrade from 2.x to 3.x ."),Object(n.b)("li",{parentName:"ul"},"Fixes ",Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/gojek/ziggurat/issues/115"}),"this bug")," in RabbitMQ message processing flow"),Object(n.b)("li",{parentName:"ul"},"Adds support for exponential backoffs in channels and normal retry flow"),Object(n.b)("li",{parentName:"ul"},"exponential backoffs can be enabled from the config")),Object(n.b)("h2",{id:"320-alpha5---2019-12-17"},"3.2.0-alpha.5 - 2019-12-17"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixes ",Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/gojek/ziggurat/issues/136"}),"issue")," where dead-set replay doesn't send the message to the retry-flow")),Object(n.b)("h2",{id:"320-alpha4---2019-12-17"},"3.2.0-alpha.4 - 2019-12-17"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixes ",Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/gojek/ziggurat/issues/129"}),"issue")," by updating tools.nrepl dependency to nrepl/nrepl")),Object(n.b)("h2",{id:"320-alpha3---2019-12-16"},"3.2.0-alpha.3 - 2019-12-16"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixes ",Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/gojek/ziggurat/issues/133"}),"this bug")," where dead set replay broke on Ziggurat upgrade from 2.x to 3.x .")),Object(n.b)("h2",{id:"320-alpha2---2019-12-12"},"3.2.0-alpha.2 - 2019-12-12"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixes ",Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/gojek/ziggurat/issues/115"}),"this bug")," in RabbitMQ message processing flow")),Object(n.b)("h2",{id:"320-alpha1---2019-12-12"},"3.2.0-alpha.1 - 2019-12-12"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Adds support for exponential backoffs in channels and normal retry flow"),Object(n.b)("li",{parentName:"ul"},"exponential backoffs can be enabled from the config")),Object(n.b)("h2",{id:"310---2019-12-6"},"3.1.0 - 2019-12-6"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Adds tracing support. With ",Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://www.jaegertracing.io/"}),"Jaeger")," as the default tracer"),Object(n.b)("li",{parentName:"ul"},"Adds a JSON middleware to parse JSON serialized functions"),Object(n.b)("li",{parentName:"ul"},"Renames report-time to report-histogram and adds deprecation notice on report-time"),Object(n.b)("li",{parentName:"ul"},"Makes metrics backward compatible with 2.x and 3.0.0 . Ziggurat now publishes metrics in 2 formats similar to version 2.12.0 and above.")),Object(n.b)("h2",{id:"310-alpha5---2019-12-5"},"3.1.0-alpha.5 - 2019-12-5"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},'Fixes metrics publishing for custom metrics (i.e. string metric namespaces): In 2.x ziggurat appended the service_name\nto a string metrics namespace (e.g. "metric" -> "service_name.metric"), we changed the contract in 3.0 by\nremoving the service_name from the metric name and instead adding a tag for it. To have backward compatibility with both\n2.x and 3.0 we now send metrics in both formats')),Object(n.b)("h2",{id:"310-alpha4---2019-12-4"},"3.1.0-alpha.4 - 2019-12-4"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Reintroduces old metrics format (statsd). Ziggurat now pushes metrics in both formats (statsd and prometheus like)."),Object(n.b)("li",{parentName:"ul"},"Reverts the changes for exponential backoff, the current implementation was broken and a new PR is being raised with the correct approach.")),Object(n.b)("h2",{id:"310-alpha3---2019-11-11"},"3.1.0-alpha.3 - 2019-11-11"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Renames report-time to report-histogram while being backward compatible")),Object(n.b)("h2",{id:"310-alpha2---2019-11-05"},"3.1.0-alpha.2 - 2019-11-05"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"JSON middleware has been added."),Object(n.b)("li",{parentName:"ul"},"Adds custom delay (",Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/gojek/ziggurat/issues/78"}),"Issue#78"),")\nfor processing messages from RabbitMQ channels and\nadds exponential backoff strategy (configurable) for channel retries.")),Object(n.b)("h2",{id:"310-alpha1---2019-10-14"},"3.1.0-alpha.1 - 2019-10-14"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Adds tracing support to the framework.")),Object(n.b)("h2",{id:"300---2019-10-04"},"3.0.0 - 2019-10-04"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Updates kafka streams - 1.1.1 -> 2.1.0"),Object(n.b)("li",{parentName:"ul"},"Changes metrics format",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Instead of having service name and topic in the metric name, everything is now added to tags"))),Object(n.b)("li",{parentName:"ul"},"Middleware",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Handler-fn will now receive the message as a byte array"),Object(n.b)("li",{parentName:"ul"},"Channel-fns will now receive the message as a byte array"),Object(n.b)("li",{parentName:"ul"},"We have provided middlewares, that can be used to deserialize the messages"),Object(n.b)("li",{parentName:"ul"},"Deadset-get api will now get serialized messages"))),Object(n.b)("li",{parentName:"ul"},"Java functions",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Java functions are now exposed for all public functions in namespaces"))),Object(n.b)("li",{parentName:"ul"},"Dependency simplification",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Removes dependency overrides.")))),Object(n.b)("h2",{id:"300-alpha7---2019-10-04"},"3.0.0-alpha.7 - 2019-10-04"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Removes dependency overrides and conflicts"),Object(n.b)("li",{parentName:"ul"},"Adds pedantic warn to generic profile"),Object(n.b)("li",{parentName:"ul"},"Adds pedantic abort to uberjar profile")),Object(n.b)("h2",{id:"300-alpha6---2019-08-22"},"3.0.0-alpha.6 - 2019-08-22"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fix increment/decrement count to accept both number and map")),Object(n.b)("h2",{id:"300-alpha5---2019-08-20"},"3.0.0-alpha.5 - 2019-08-20"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Exposes Java methods for init, config, producer, sentry, metrics, fixtures namespaces"),Object(n.b)("li",{parentName:"ul"},"Adds util methods for converting data types between java and Clojure")),Object(n.b)("h2",{id:"300-alpha4---2019-07-29"},"3.0.0-alpha.4 - 2019-07-29"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Remove old metrics from being sent")),Object(n.b)("h2",{id:"300-alpha3---2019-07-10"},"3.0.0-alpha.3 - 2019-07-10"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Adds middleware support"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"Breaking Change!")," Mapper-function will now receive deserialised message if middleware is not applied"),Object(n.b)("li",{parentName:"ul"},"Deadset view will now return serialized messages")),Object(n.b)("h2",{id:"300-alpha2---2019-07-03"},"3.0.0-alpha.2 - 2019-07-03"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixes a bug that incorrectly checked for additional-tags in ziggurat.metrics/merge-tags")),Object(n.b)("h2",{id:"300-alpha1---2019-06-28"},"3.0.0-alpha.1 - 2019-06-28"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixes a bug where calling inc-or-dec count without passing additional tags raised and exception")),Object(n.b)("h2",{id:"300-alpha---2019-06-21"},"3.0.0-alpha - 2019-06-21"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Upgrades kafka streams to version 2.1. Please refer ",Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"UpgradeGuide.md"}),"this")," to upgrade")),Object(n.b)("h2",{id:"2124---2019-08-22"},"2.12.4 - 2019-08-22"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fix increment/decrement count to accept both number and map")),Object(n.b)("h2",{id:"2123---2019-07-26"},"2.12.3 - 2019-07-26"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fix functions to either take vector or string as input")),Object(n.b)("h2",{id:"2122---2019-07-03"},"2.12.2 - 2019-07-03"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixes a bug that incorrectly checked for additional-tags in ziggurat.metrics/merge-tags")),Object(n.b)("h2",{id:"2121---2019-06-28"},"2.12.1 - 2019-06-28"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixes a bug where calling inc-or-dec count without passing additional tags raised and exception")),Object(n.b)("h2",{id:"2120---2019-06-17"},"2.12.0 - 2019-06-17"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Add support for providing a topic-name label in the metrics"),Object(n.b)("li",{parentName:"ul"},"Multiple Kafka producers support in ziggurat (#55)"),Object(n.b)("li",{parentName:"ul"},"Validate stream routes only when modes is not present or it contains stream-server (#59)")),Object(n.b)("h2",{id:"2111---2019-06-04"},"2.11.1 - 2019-06-04"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Actor stop fn should stop before the Ziggurat state (#53)")),Object(n.b)("h2",{id:"2110---2019-05-31"},"2.11.0 - 2019-05-31"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Running ziggurat in different modes (#46)")),Object(n.b)("h2",{id:"2102---2019-05-03"},"2.10.2 - 2019-05-03"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Adds config to change the changelog topic replication factor")),Object(n.b)("h2",{id:"2101---2019-05-02"},"2.10.1 - 2019-05-02"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"dont close the channel on shutdown listener. it is already closed when connection is broken. this prevents topology recovery"),Object(n.b)("li",{parentName:"ul"},"catch message production exception in rabbitmq publisher"),Object(n.b)("li",{parentName:"ul"},"Adds nippy as dependency instead of carmine")),Object(n.b)("h2",{id:"2100---2019-04-11"},"2.10.0 - 2019-04-11"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Adds macro for setting thread-local context params for logs")),Object(n.b)("h2",{id:"292---2019-03-31"},"2.9.2 - 2019-03-31"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Adds deployent stage on CI pipeline"),Object(n.b)("li",{parentName:"ul"},"Initialize reporters before running actor start fn")),Object(n.b)("h2",{id:"293-snapshot---2019-02-26"},"2.9.3-SNAPSHOT - 2019-02-26"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Initialize reporters before running actor start fn")),Object(n.b)("h2",{id:"292-snapshot---2019-02-26"},"2.9.2-SNAPSHOT - 2019-02-26"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Adds deployent stage on CI pipeline")),Object(n.b)("h2",{id:"291---2019-02-22"},"2.9.1 - 2019-02-22"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Updates changelog for older releases"),Object(n.b)("li",{parentName:"ul"},"Releases using java 8")),Object(n.b)("h2",{id:"290---2019-02-21"},"2.9.0 - 2019-02-21"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"This release has been compiled using java 10. It will not work with\nolder versions of java.")),Object(n.b)("li",{parentName:"ul"},"Adds oldest-processed-message-in-s config"),Object(n.b)("li",{parentName:"ul"},"Adds capabiltiy to filter message based on timestamp"),Object(n.b)("li",{parentName:"ul"},"Fixes bug in deadset API for channel enabled"),Object(n.b)("li",{parentName:"ul"},"Changes namespace of ",Object(n.b)("inlineCode",{parentName:"li"},"transformer")," into ",Object(n.b)("inlineCode",{parentName:"li"},"timestamp-transformer"))),Object(n.b)("h2",{id:"281---2019-02-18"},"2.8.1 - 2019-02-18"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Handle Deadset API when retry is disabled"),Object(n.b)("li",{parentName:"ul"},"Fixing message being retried n + 1 times"),Object(n.b)("li",{parentName:"ul"},"Fixing kafka delay calculation")),Object(n.b)("h2",{id:"280---2019-02-04"},"2.8.0 - 2019-02-04"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Upgrades kafka streams to 1.1.1"),Object(n.b)("li",{parentName:"ul"},"Adds stream integration tests"),Object(n.b)("li",{parentName:"ul"},"Adds API to flush messages from dead-letter-queue in RabbitMQ")),Object(n.b)("h2",{id:"272---2018-12-19"},"2.7.2 - 2018-12-19"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Starts sentry-reporter in on application initialization")),Object(n.b)("h2",{id:"271---2018-12-19"},"2.7.1 - 2018-12-19"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"removes executor dependency as it was not being used"),Object(n.b)("li",{parentName:"ul"},"updates readme and contribution guidelines"),Object(n.b)("li",{parentName:"ul"},"refactors config files to remove gojek specific configs"),Object(n.b)("li",{parentName:"ul"},"Removes sentry dependency and instead uses sentry-clj.async")),Object(n.b)("h2",{id:"270---2018-12-12"},"2.7.0 - 2018-12-12"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Merges lambda commons and adds default configs for missing application specified configs"),Object(n.b)("li",{parentName:"ul"},"Users using ",Object(n.b)("inlineCode",{parentName:"li"},"lambda-commons.metrics")," should now start using ",Object(n.b)("inlineCode",{parentName:"li"},"ziggurat.metrics")," to send custom metrics.")),Object(n.b)("h2",{id:"263---2018-11-30"},"2.6.3 - 2018-11-30"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixes bug where connection to rabbitmq fails when stream routes is not passed in mount/args")),Object(n.b)("h2",{id:"262---2018-11-29"},"2.6.2 - 2018-11-29"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Adds support for multipart params over actor routes, moves lein-kibit and eastwood to dev plugins")),Object(n.b)("h2",{id:"261---2018-11-26"},"2.6.1 - 2018-11-26"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Changed the order of starting up of ziggurat and actor. First config will be initialized, then actor function will start up and ziggurat start function will start up."),Object(n.b)("li",{parentName:"ul"},"Apps with (mount/start) in their ",Object(n.b)("inlineCode",{parentName:"li"},"start-fn")," will no longer work correctly. Users should start using ",Object(n.b)("inlineCode",{parentName:"li"},"mount/only")," instead.")),Object(n.b)("h2",{id:"260---2018-11-23"},"2.6.0 - 2018-11-23"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Removes Yggdrasil, bulwark and ESB log entities dependency"),Object(n.b)("li",{parentName:"ul"},"Removes the ",Object(n.b)("inlineCode",{parentName:"li"},"make-config")," function from ",Object(n.b)("inlineCode",{parentName:"li"},"ziggurat.config")," namespace. Users should now use ",Object(n.b)("inlineCode",{parentName:"li"},"config-from-env")," function instead.")),Object(n.b)("h2",{id:"259---2018-11-16"},"2.5.9 - 2018-11-16"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Overrides and exposes kafka streams config: buffered.records.per.partitions and commit.inteval.ms")),Object(n.b)("h2",{id:"258---2018-11-15"},"2.5.8 - 2018-11-15"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixes bug where rabbitmq connection is established even when retry is disabled and channels are absent in consumer/start-subscribers")),Object(n.b)("h2",{id:"257---2018-11-14"},"2.5.7 - 2018-11-14"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Add configuration to read data from earliest offset in kafka")),Object(n.b)("h2",{id:"256---2018-10-10"},"2.5.6 - 2018-10-10"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixes rabbitmq queue creation when retries are disabled and channels are present")),Object(n.b)("h2",{id:"255---2018-10-09"},"2.5.5 - 2018-10-09"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixes rabbitmq intialization when retry is disabled but channels are present")),Object(n.b)("h2",{id:"254---2018-10-09"},"2.5.4 - 2018-10-09"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixes dead set management api to validate the channel names")),Object(n.b)("h2",{id:"253---2018-10-09"},"2.5.3 - 2018-10-09"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Starts up rabbitmq connection when channels are present or retry is enabled")),Object(n.b)("h2",{id:"252---2018-10-09"},"2.5.2 - 2018-10-09"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixes bug around reporting execution time for handler fn")),Object(n.b)("h2",{id:"251---2018-10-05"},"2.5.1 - 2018-10-05"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fix deadset view bug")),Object(n.b)("h2",{id:"250---2018-10-04"},"2.5.0 - 2018-10-04"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Adds arbitrary channels for long running jobs"),Object(n.b)("li",{parentName:"ul"},"Fix parallelism for retry workers")),Object(n.b)("h2",{id:"240---2018-08-08"},"2.4.0 - 2018-08-08"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Starts sending expiration per message instead of setting it on the queue")),Object(n.b)("h2",{id:"230---2018-07-16"},"2.3.0 - 2018-07-16"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Starts calculating timestamp from kafka metadata"),Object(n.b)("li",{parentName:"ul"},"removes deprecated config variables in kafka-streams")),Object(n.b)("h2",{id:"221---2018-07-10"},"2.2.1 - 2018-07-10"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Upgraded lambda commons library to 0.3.1")),Object(n.b)("h2",{id:"220---2018-07-09"},"2.2.0 - 2018-07-09"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Upgraded lambda commons library")),Object(n.b)("h2",{id:"210---2018-07-02"},"2.1.0 - 2018-07-02"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Adds metrics to skipped and retried message"),Object(n.b)("li",{parentName:"ul"},"Retry message when actor raises an expection")),Object(n.b)("h2",{id:"200---2018-06-15"},"2.0.0 - 2018-06-15"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Add support for multi stream routes")),Object(n.b)("h2",{id:"134---2018-06-11"},"1.3.4 - 2018-06-11"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixes replay of messages in dead letter queue.")),Object(n.b)("h2",{id:"133---2018-06-11"},"1.3.3 - 2018-06-11"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Bumps up lambda-common version to 0.2.2")),Object(n.b)("h2",{id:"132---2018-07-07"},"1.3.2 - 2018-07-07"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixes converting message from kafka to clojure hash")),Object(n.b)("h2",{id:"131---2018-07-07"},"1.3.1 - 2018-07-07"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixes converting message from kafka to clojure hash"),Object(n.b)("li",{parentName:"ul"},"Instruments time of execution of mapper function"),Object(n.b)("li",{parentName:"ul"},"Increments the esb-log-entites version to fetch from 3.18.7 and above")),Object(n.b)("h2",{id:"130---2018-05-28"},"1.3.0 - 2018-05-28"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixes the consumer to retry the mapper-fn")),Object(n.b)("h2",{id:"123---2018-05-28"},"1.2.3 - 2018-05-28"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Uses WallclockTimestampExtractor as timestamp extractor for the streams")),Object(n.b)("h2",{id:"122---2018-05-24"},"1.2.2 - 2018-05-24"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Empty release")),Object(n.b)("h2",{id:"121---2018-05-11"},"1.2.1 - 2018-05-11"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Always fetches the esb-log-entites version greater than or equal 3.17.11")),Object(n.b)("h2",{id:"120---2018-05-10"},"1.2.0 - 2018-05-10"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Bumps up the esb log entities version to 3.17.11"),Object(n.b)("li",{parentName:"ul"},"Fetches config from yggdrasil and if not found fallbacks to env")),Object(n.b)("pre",null,Object(n.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),'Configs added\n{\n:ziggurat {:yggdrasil {:host "http://localhost"\n                       :port [8080 :int]\n                       :connection-timeout-in-ms [1000 :int}}\n}\n')),Object(n.b)("h2",{id:"111---2018-05-03"},"1.1.1 - 2018-05-03"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Bumps up the esb log entities version")),Object(n.b)("h2",{id:"110---2018-05-03"},"1.1.0 - 2018-05-03"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Adds ability to pass actor specific routes")),Object(n.b)("h2",{id:"109---2018-05-02"},"1.0.9 - 2018-05-02"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Changes dependency from esb-log-client to esb-log-entities")),Object(n.b)("h2",{id:"108---2018-04-27"},"1.0.8 - 2018-04-27"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Adds metrics to count throughput"),Object(n.b)("li",{parentName:"ul"},"Changes the job name getting pushed to NR")),Object(n.b)("h2",{id:"107---2018-04-25"},"1.0.7 - 2018-04-25"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Adds an ",Object(n.b)("inlineCode",{parentName:"li"},"v1/dead_set")," to view the dead set messages")),Object(n.b)("h2",{id:"106---2018-04-25"},"1.0.6 - 2018-04-25"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Bump version of ",Object(n.b)("inlineCode",{parentName:"li"},"com.gojek/sentry"))),Object(n.b)("h2",{id:"105---2018-04-24"},"1.0.5 - 2018-04-24"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixed a bug in application shutdown: the actor's start-fn was being called instead of the stop-fn."),Object(n.b)("li",{parentName:"ul"},"Made some functions private."),Object(n.b)("li",{parentName:"ul"},"Added some docstrings."),Object(n.b)("li",{parentName:"ul"},"Added Gotchas section to the README.")),Object(n.b)("h2",{id:"104---2018-04-20"},"1.0.4 - 2018-04-20"),Object(n.b)("h3",{id:"added"},"Added"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Added ziggurat.sentry/report-error to be used by actors.")),Object(n.b)("h2",{id:"103---2018-04-20"},"1.0.3 - 2018-04-20"),Object(n.b)("h3",{id:"changed"},"Changed"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Upgrade esb-log-client version to latest (1.103.0).")),Object(n.b)("h2",{id:"102---2018-04-20"},"1.0.2 - 2018-04-20"),Object(n.b)("h3",{id:"changed-1"},"Changed"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Various internal refactorings: removed dead code, fixed some spelling mistakes, made some functions private.")),Object(n.b)("h2",{id:"101---2018-04-18"},"1.0.1 - 2018-04-18"),Object(n.b)("h3",{id:"added-1"},"Added"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Flag to enable retries and conditionally start the rabbitmq states depending on this flag.")),Object(n.b)("h2",{id:"100---2018-04-17"},"1.0.0 - 2018-04-17"),Object(n.b)("h3",{id:"changed-2"},"Changed"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Namespace framework configs under ",Object(n.b)("inlineCode",{parentName:"li"},":ziggurat"))),Object(n.b)("h2",{id:"010---2018-04-17"},"0.1.0 - 2018-04-17"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Initial release")))}void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/Release-Notes.mdx"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-release-notes-mdx-5f678c10659e5cb5e620.js.map