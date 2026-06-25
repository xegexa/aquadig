package aquadig;

/**
 * Delegates to {@link h} so callers avoid ambiguous J2S resolution of {@code aquadig.h} vs
 * {@code com.vlm.redstar.client.core.csp.a} (both historically referred to as short name {@code a}
 * in some transpiler paths).
 */
final class ParticleTick {
   private ParticleTick() {
   }

   static void tick() {
      h.c();
   }

   static void reset() {
      h.a();
   }
}
