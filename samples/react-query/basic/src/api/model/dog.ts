/**
 * Generated by orval v6.9.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import type { Labradoodle } from './labradoodle';
import type { Dachshund } from './dachshund';

export type Dog =
  | (Labradoodle & {
      barksPerMinute?: number;
      type: 'dog';
    })
  | (Dachshund & {
      barksPerMinute?: number;
      type: 'dog';
    });
