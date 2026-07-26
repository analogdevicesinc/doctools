<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX662A evaluation kit (EV kit) is an assembled surface-mount board that allows easy evaluation of the MAX662A or MAX662. The EV kit schematic is the standard circuit shown in Figure 3a on page 5 of the MAX662A data sheet. A 3-pin jumper connector and a shunt are included to allow easy control of normal-operation and shutdown modes.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART            | TEMP. RANGE   | BOARD TYPE    |
|-----------------|---------------|---------------|
| MAX662AEVKIT-SO | 0°C to +70°C  | Surface Mount |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                    |
|---------------|-------|------------------------------------------------|
| C1, C2        |     2 | 0.22µF ceramic SMD chip capacitors             |
| C3            |     1 | 0.1µF ceramic SMD chip capacitor (MAX662 only) |
| C4, C5        |     2 | 4.7µF low-ESR tantalum capacitors              |
| J1            |     1 | 3-pin jumper                                   |
| None          |     1 | Shunt                                          |
| U1            |     1 | MAX662ACSA                                     |
| None          |     1 | MAX662A data sheet                             |
| None          |     1 | 1.5" x 1.1" PC board                           |

## \_\_\_\_\_\_\_\_\_\_\_\_Operating Instructions

Pin  1  of  the  3-pin  jumper  connector  is  tied  to  ground, pin 2 is tied to the SHDN pin of the MAX662A, and pin 3 is  tied  to  VCC (Figure 1). Connect the jumper shunt across pins 1 and 2 of jumper connector J1 for normal operation. Note:  The MAX662A EV kit will be in shutdown mode if the jumper shunt is not inserted across J1. The SHDN pin has an internal pull-up to VCC, and therefore must be connected to ground for proper operation. Connect the jumper shunt across jumper connector pins 2 and 3, or simply remove the jumper shunt to observe shutdown-mode operation.

Observe the power-supply input voltage limits specified in  the  data  sheet.  Do  not  short  the  output  to  ground. Also, do not excessively load the output-VOUT should not fall below VCC. If the above conditions are violated, the device may be damaged.

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_PC Board Layout

The EV kit printed circuit board layouts (Figures 2 and 3) can be copied directly and incorporated into production boards.

<!-- image -->

Figure 1.  MAX662A EV Kit Surface-Mount Component Placement Diagram (1x scale)

Figure 2.  MAX662A EV Kit PC Board Layout-Component Side (1x scale)

<!-- image -->

Figure 3.  MAX662A EV Kit PC Board Layout-Solder Side (1x scale)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.