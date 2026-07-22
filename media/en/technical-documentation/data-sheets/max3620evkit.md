<!-- lastmod 2022-08-02 -->
\_\_\_\_\_\_\_\_\_\_\_\_\_\_

MAX3620 Evaluation Kit

<!-- image -->

## General Description

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Features

The MAX3620 evaluation kit (EV kit) is an assembled demonstration board that provides for complete evaluation  of  the  MAX3620  high  speed  clock  delay line.

The  EV  kit  comes  assembled  with  a  MAX3620A (0.75ns delay). Samples of MAX3620B (1.00ns delay), MAX3620C  (1.25ns  delay),  and  MAX3620D  (1.50ns delay) are also included to be installed by the user.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART          | TEMPRANGE      | ICPACKAGE   |
|---------------|----------------|-------------|
| MAX3620AEVKIT | -40°C to +85°C | 6 TDFN      |
| MAX3620BEVKIT | -40°C to +85°C | 6 TDFN      |
| MAX3620CEVKIT | -40°C to +85°C | 6 TDFN      |
| MAX3620DEVKIT | -40°C to +85°C | 6 TDFN      |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Selector Guide

| PART     | PKG CODE   | TOP MARK   |
|----------|------------|------------|
| MAX3620A | T633-2     | AJX        |
| MAX3620B | T633-2     | AIY        |
| MAX3620C | T633-2     | AIZ        |
| MAX3620D | T633-2     | AJA        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Component List

| DESIGNATION            |   QTY | DESCRIPTION                |
|------------------------|-------|----------------------------|
| J1, J2, J3, J4, J5, J6 |     6 | SMA connectors, edge mount |
| U1                     |     1 | MAX3620AETT 3mmX3mm 6 TDFN |
|                       |     1 | MAX3620BETT 3mmX3mm 6 TDFN |
|                       |     1 | MAX3620CETT 3mmX3mm 6 TDFN |
|                       |     1 | MAX3620DETT 3mmX3mm 6 TDFN |

- ♦ Fully Assembled and Tested
- ♦ Additional samples of MAX3620B, MAX3620C, and MAX3620D Devices Included.

## \_\_\_\_\_\_\_\_\_\_\_\_\_MAX3620 Quick Start

The  MAX3620  EV  Kit  can  be  configured  to  evaluate either  single-ended  or  differential  signals.  For  singleended operation, leave the unused input open. The EV Kit has a calibration trace equal in length to the signal line. If matched cables are used, delay can accurately be  determined  by  measuring  the  timing  between  the signal  at  the  calibration  strip  output  and  the  signal  at the  output  of  the  MAX3620.  The  evaluation kit  has  a 50 Ω interface, 50 Ω test equipment should be used.

## To evaluate the MAX3620A:

- 1) Using  matched  50 Ω SMA  cables,  connect one  output  of  a  differential  clock  or  pulse generator,  set  up  for  300MHz  operation,  to IN1.  Connect  the  other  differential  output  to the calibration strip (J6).
- 2) Using  another  set  of  matched  50 Ω SMA cables, connect OUT1 and the output of the calibration  strip  (J5)  to  the  inputs  of  a  50 Ω oscilloscope.

Note: The timing skew between oscilloscope channels will affect delay measurements. Be sure  to  perform  a  skew  calibration  before applying signals to the oscilloscope.

- 3) Measure  the  delay  from  the  output  of  the calibration  strip  to  OUT1  at  the  signal  midpoints. Because the two polarities of a single differential  signal  are  used  as  two  separate signals,  the  output  of  the  delay  line  will  be 180°   out  of  phase  from  the  output  of  the calibration  strip.  Measure  the  delay  from  the calibration-strip  rising  edge  to  the  laggingdelay-line falling edge (or from the calibrationstrip falling edge  to  the lagging-delay-line rising edge).

If evaluation of MAX3620B, MAX3620C, or MAX3620D is desired, see Table 1 in the MAX3620 datasheet for the recommended operating conditions of each device. When changing between versions, be sure to connect the exposed pad to the EV Kit GND.

1

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX3620 Evaluation Kit

<!-- image -->

Figure 1. MAX3620 EV Kit Schematic

Figure 2. MAX3620 EV Kit PC Board LayoutComponent Side

<!-- image -->

Figure 3. MAX3610 EV Kit PC Board Layout Power Plane

<!-- image -->

2\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 4. MAX3610 EV Kit PC Board Layout Ground Plane

<!-- image -->

## MAX3620 Evaluation Kit

Figure 5. MAX3610 EV Kit Component Placement Guide, Solder Side

<!-- image -->

Maxim cannot assume responsibility for any circuitry other than circuitry embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change circuitry and specifications without notice at any time.

<!-- image -->