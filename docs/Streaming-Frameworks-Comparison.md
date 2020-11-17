---
name: Streaming Frameworks Comparison
route: /docs/streaming-frameworks-comparison
---

# Streaming Frameworks Comparison
---

Let's Understand some of the terminologies first. 

**Dedicated Cluster**
Certain Frameworks run on dedicated infrastructure, that is not part of the domain logic. They typically accept tasks or jobs (i.e. the domain logic) and run that on the infrastructure.

**Windowing**
Windowing lets you control how to group records that have the same key for stateful operations such as [aggregations](https://kafka.apache.org/20/documentation/streams/developer-guide/dsl-api.html#streams-developer-guide-dsl-aggregating) or [joins](https://kafka.apache.org/20/documentation/streams/developer-guide/dsl-api.html#streams-developer-guide-dsl-joins) into so-called windows. Windows are tracked per record key.

**State Management**
(write some more)
Some frameworks support in-memory databases that can be used to build up cache (that, in turn, make the app stateful)

**Low Latency**
With stream processing, we have to work with the problem of eventual consistency. This could lead to high latency when the load is high and the processing is slow. 
The framework also should support stream processing
For real-time processing, we need latency guarantees and thus the ability to scale up consumers.

**Coupled With Kafka**
For stream processing frameworks there can be multiple input sources of streams that they operate upon.
Ziggurat and Samza support only Kafka as the data source right now. While frameworks like storm support Kafka, AWS kinesis, RabbitMQ as well.

**Independent Retries**
Whenever the processing of a message fails while processing the stream, some use cases require us to retry the message instead of skipping it. We also don’t wish to block the stream processing until the processing succeeds, so we need a mechanism that supports retries with a backoff.
Ziggurat supports that with a set of retry queues in RabbitMQ.

**API Server**
With Independent retries and dead-set, the need for a web server emerges. Along with that, it can also give an interface to add custom routes on the API-server(managed by the framework).

**Async Processing of Messages**
Kafka Streams has a limitation on the number of consumers that can run in parallel (it can not be more than the number of partitions in that topic). To get over this limitation ziggurat introduces async processing of messages by sinking the messages into Rabbitmq and reading with the required number of consumers from Rabbitmq (Rabbitmq has not logically limit on the number of consumers). 
Other frameworks that support sources of input other than Kafka might not need to tackle this issue at all.


|                              | Storm                       | Spark                       | Flink                       | Ziggurat | Samza |
| ---------------------------- | --------------------------- | --------------------------- | --------------------------- | -------- | ----- |
| Dedicated Cluster            | Yes                         | Yes                         | Yes                         | No       | Yes   |
| Windowing                    | No                          | Yes                         | Yes                         | No       | No    |
| State Management             | No                          | No                          | Yes                         | No       | Yes   |
| Low Latency                  | Yes                         | Yes                         | Yes                         | Yes      | Yes   |
| Coupled With Kafka           | No                          | No                          | No                          | Yes      | Yes   |
| Independent Retries          | No                          | No                          | No                          | Yes      | No    |
| API server                   | No                          | No                          | No                          | Yes      | No    |
| Async Processing of Messages | Maybe based on input source | Maybe based on input source | Maybe based on input source | Yes      | No    |
