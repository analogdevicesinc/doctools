<!-- lastmod 2022-08-03 -->
## General Description

The MAX9945 evaluation kit (EV kit) provides a proven design to evaluate the MAX9945 low-noise, MOS-input, low-power op amp in an 8-pin F MAX ®  package. Various test points are provided for easy evaluation. The EV kit circuit  is  preconfigured  as  a  transimpedance  amplifier (TIA), but can easily be adapted to act as a noninverting, inverting, or differential amplifier by changing a few components. MOS-input bias currents, low input-voltage noise, and rail-to-rail output stage make this device ideal for  photodiode  transimpedance  amplifiers,  piezo  buffers,  and  audio  line  out  applications.  The  components have pads that accommodate 0805 packages, making them easy to solder and replace. The MAX9945 EV kit PCB comes with a MAX9945AUA+ installed. Note that the MAX9945 is also available in a 3mm x 3mm TDFN package.

<!-- image -->

## Features

- S Accommodates Multiple Op-Amp Configurations
- S Wide Input Supply Range
- S 0805 Components
- S Lead(Pb)-Free and RoHS Compliant
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9945EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   Qty | DESCRIPTION                                                                                |
|---------------|-------|--------------------------------------------------------------------------------------------|
| C1, C3        |     2 | 0.1 F F Q 10%, 50V X7R ceramic capacitors (0805) TDK C2012X7R1H104K                        |
| C2, C4        |     2 | 4.7 F F Q 10%, 25V X5R ceramic capacitors (0805) Murata GRM21BR6E475K                      |
| C5, C6, C7    |     0 | Not installed, ceramic capacitors (0805)                                                   |
| D1, D2        |     2 | Not installed, pico-amp diodes Linear Integrated Systems SSTPAD (provided with the EV kit) |

| DESIGNATION             |   Qty | DESCRIPTION                                                  |
|-------------------------|-------|--------------------------------------------------------------|
| R1, R2, R3, R5          |     4 | 0 I Q 5% resistors (0805)                                    |
| R4                      |     1 | 100k I Q 1% resistor (0805)                                  |
| TP1, TP2, TP5, TP6, TP7 |     5 | Red multipurpose test points                                 |
| TP3, TP4                |     2 | Black multipurpose test points                               |
| U1                      |     1 | 38V, low-noise, MOS-input op amp (8 F MAX) Maxim MAX9945AUA+ |
| -                       |     1 | PCB: MAX9945 EVALUATION KIT+                                 |

## Component Suppliers

| SUPPLIER                         | PHONE        | WEBSITE                     |
|----------------------------------|--------------|-----------------------------|
| Murata Electronics North America | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                        | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX9945 when contacting these component suppliers.

µMAX is a registered trademark of Maxim Integrated Products, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9945 Evaluation Kit

## Quick Start

## Required Equipment

- U MAX9945 EV kit
- U Q 15V, 10mA DC power supply (PS1)
- U +1V precision voltage source
- U External 10k I and 20k I resistors
- U Digital multimeter (DMM)

## Procedure

The  MAX9945  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation:

- 1)  Connect  the  positive  terminal  of  the  +15V  supply to  VCC  (TP1)  and  the  GND  terminal  to  GND  (TP4). Connect the negative terminal of the -15V supply to VEE (TP2) and the GND terminal to GND (TP3). The power supply should be off.
- 2)  Connect the positive terminal of the precision voltage source to INM (TP5) through an external 10k I series resistor.  Connect the negative terminal of the precision voltage source to INP (TP6). TP6 is shorted to the board GND through an on-board 0 I resistor.
- 3)  With the 100k I feedback resistor and external 10k I series  resistor,  the  gain  is  -10  (inverting  configuration).  Connect  the  DMM  to  monitor  the  voltage  on OUTA (TP7).
- 4)  Turn on the Q 15V power supply.
- 5)  Apply  100mV  from  the  precision  voltage  source. Observe  the  output  at  OUTA  (TP7)  on  the  DMM. OUTA should read approximately -1V.
- 6)  Replace the external 10k I resistor with a 20k I resistor.  The gain is now -5. OUTA should read approximately -500mV.

## Detailed Description of Hardware

The  MAX9945  EV  kit  provides  a  proven  layout  for  the MAX9945 low-noise op amp. The MAX9945 accepts a single-supply voltage from +4.75V to +38V or dual supply from Q 2.4V to Q 19V. The IN+ trace completely wraps the  IN-  trace  for  shielding  against  parasitic  leakage. Optional  low-leakage  pico-amp  diodes  are  included on the EV kit,  but  not  installed.  Various  test  points  are included for easy evaluation.

## Op-Amp Configurations

## Transimpedance Application

The  MAX9945  EV  kit  comes  preconfigured  as  a  transimpedance amplifier (TIA) to interface to a photodiode. MOS inputs on the MAX9945 ensure extremely low input bias  currents  (50fA  typ)  that  channel  nearly  all  of  the photodiode  output  current  into  the  feedback  resistor (R4).  The  output  voltage  of  the  TIA  is  the  photodiode current multiplied by the feedback resistor:

<!-- formula-not-decoded -->

where  R4  comes  installed  as  a  100k I resistor,  IPD  is defined as photodiode current, and VOS is the input offset voltage of the op amp.

When the photodiode is located at a distance from the op  amp  (e.g.,  at  the  end  of  a  cable),  it  is  sometimes advantageous to place the photodiode between the IN+ and IN- terminals of the op amp, instead of referencing it to GND. For good common-mode noise rejection in this scenario, replace R1 with a 100k I resistor as well. The output voltage is then given by the following equation:

<!-- formula-not-decoded -->

Use capacitor C6 (and C5, if applicable) to stabilize the op amp by rolling off high-frequency gain due to a large photodiode capacitance or cable capacitance.

## Inverting Configuration

To configure the MAX9945 EV kit as an inverting amplifier, replace R2 with the desired 1% gain-setting resistor and feed a voltage VIN between TP5 and GND. The output voltage is given by the following equation:

<!-- formula-not-decoded -->

The offset voltage VOS can be either positive or negative.

## Differential Amplifier

To configure the MAX9945 EV kit as a differential amplifier, replace R1-R4 with appropriate resistors. Make sure R1 = R4 and R2 = R3. The resulting output voltage and gain are shown in the equations below. The CMRR of the differential amplifier will be determined by the matching of the resistor ratios R4/R2 and R1/R3:

<!-- formula-not-decoded -->

where

<!-- formula-not-decoded -->

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Differential Pico-Amp Protection Diodes

The  PCB  layout  provides  pads  on  the  bottom  of  the PCB for two back-to-back pico-amp diodes that can be used for differential-voltage protection of the op amp, if necessary.  These  low-leakage  diodes  ensure  that  the extremely low bias currents of the MAX9945 are not seriously degraded. The pico-amp diodes are not installed on the EV kit board.

## MAX9945 Evaluation Kit

## Capacitive Loads

Some applications require driving large capacitive loads. To improve the stability of the amplifier in such cases, replace  R5  with  a  suitable  resistor  value  to  improve amplifier  phase  margin.  The  R5/C7  filter  can  also  be used as an anti-alias filter or to limit amplifier output noise by reducing its output bandwidth.

<!-- image -->

Figure 1. MAX9945 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX9945 Evaluation Kit

<!-- image -->

Figure 2. MAX9945 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX9945 EV Kit PCB Layout-Component Side

Figure 4. MAX9945 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 5. MAX9945 EV Kit Component Placement GuideSolder Side

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9945 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                               | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------|-----------------|
|                 0 | 5/09            | Initial release                           | -               |
|                 1 | 8/09            | Added diode part number in Component List | 1               |