---
name: Ziggurat Release Notes
route: /docs/release-notes
---

# Ziggurat Release Notes
---

## Features added in 3.2.0
1. The following changes have been made to improve exponential retries, which is an experimental feature.
     * Retry type configuration has been introduced for both, channel retry-flow and normal retry flow. A retry type can take of these values: [:linear :exponential]
     * Defines a limit of 25 on number of retries in exponential backoff
     * Channels can have different values of :queue-timeout-ms, which controls the expiration time in the delay queue. 
2. Fixes this [bug](https://github.com/gojek/ziggurat/issues/133) where dead set replay broke on Ziggurat upgrade from 2.x to 3.x
3. Fixes this [bug](https://github.com/gojek/ziggurat/issues/136) where dead-set replay doesn't send the message to the retry-flow
4. Fixes this [bug](https://github.com/gojek/ziggurat/issues/115) in RabbitMQ message processing flow
5. Fixes this [issue](https://github.com/gojek/ziggurat/issues/129) by updating tools.nrepl dependency to nrepl/nrepl

## Features added in 3.1.0
 1. Support for Opentracing, where default implementation is Jaeger
 2. JSON messages can be consumed using JSON middleware
 3. Provides a `report-histogram` alias for `report-time` method
 4. Reintroduces the older metrics format. Ziggurat now pushes metrics in both formats (older and Prometheus like). This makes this release backward compatible with 2.x.x for metrics.

## Features added in 3.0.0


1. Updates Kafka streams 1.1.1 -> 2.1.0
2. Changes metrics format
3. Instead of having service name and topic in the metric name, everything is now added to tags
4. Middlewares, which can be used to deserialize the messages
5. Handler-fn will now receive the message as a byte array
6. Channel-fns will now receive the message as a byte array
7. Deadset-get API will now get serialized messages
8. Auto-generated Java APIs for Ziggurat’s public interfaces
9. Dependency simplification
10. Removes dependency overrides.

