package com.vlm.redstar.client.ui;

import java.io.InputStream;

public final class b {
   private String b;
   public byte[][] a;

   public b(String var1) {
      this.b = var1;
      this.a();
   }

   private void a() {
      this.b();
   }

   private void b() {
      if (this.b != null) {
         InputStream var1;
         if ((var1 = this.getClass().getResourceAsStream(this.b)) != null) {
            byte[] var4 = new byte[800];
            int var7 = 0;
            int var8 = 0;
            int var9 = 0;
            int var12 = 0;
            boolean var13 = false;
            boolean var17 = true;

            try {
               int var18;
               for (InputStream var10000 = var1; (var18 = var10000.read()) != -1; var10000 = var1) {
                  if (var18 == 10) {
                     var12++;
                  }
               }

               var1.close();
               System.gc();
               var1 = this.getClass().getResourceAsStream(this.b);
               this.a = new byte[var12][];

               while (var17) {
                  var1.read(var4, var8, var4.length - var8);
                  var8 = -1;

                  for (int var19 = 0; var19 < var4.length; var19++) {
                     byte var2 = var4[var19];
                     if (var19 == 0 && var2 == 10) {
                        var8 = 0;
                     } else if (var2 != 13) {
                        if (var2 == -1) {
                           var17 = false;
                           break;
                        }
                     } else {
                        var7 = var19 - var8 - 1;
                        var8 = var19;
                        byte[] var6 = new byte[var7];
                        int var20 = 0;

                        for (int var21 = 0; var21 < var7; var21++) {
                           byte var14;
                           label96: {
                              var14 = var4[var8 - var7 + var21];
                              boolean var31;
                              if (!var13) {
                                 if (var14 != 92) {
                                    break label96;
                                 }

                                 var31 = true;
                              } else {
                                 if (var14 == 110) {
                                    var14 = 10;
                                 }

                                 var20++;
                                 var31 = false;
                              }

                              var13 = var31;
                           }

                           if (!var13) {
                              var6[var21 - var20] = var14;
                           }
                        }

                        byte[] var5;
                        if (var20 > 0) {
                           var5 = new byte[var7 - var20];

                           for (int var30 = 0; var30 < var5.length; var30++) {
                              var5[var30] = var6[var30];
                           }
                        } else {
                           var5 = var6;
                        }

                        this.a[var9] = new byte[var7];
                        this.a[var9] = var5;
                        if (++var9 > var12 - 1) {
                           var17 = false;
                           break;
                        }

                        var19++;
                        var8++;
                     }
                  }

                  if (var17) {
                     if ((var7 = var4.length - 1 - var8) > 0) {
                        var8 = var4.length - 1;
                        byte[] var24 = new byte[var7];

                        for (int var28 = 0; var28 < var7; var28++) {
                           var24[var28] = var4[var8 - var7 + 1 + var28];
                        }

                        var4 = new byte[800];

                        for (int var29 = 0; var29 < var7; var29++) {
                           var4[var29] = var24[var29];
                        }

                        var8 = var7;
                     } else {
                        var8 = 0;
                        var4 = new byte[800];
                     }
                  }
               }
            } catch (Throwable var22) {
            }

            System.gc();
         }
      }
   }

   public final String a(int var1) {
      return new String(this.a[var1]);
   }
}
