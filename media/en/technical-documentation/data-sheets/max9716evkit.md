<!-- lastmod 2022-08-03 -->
## MAX9716 Evaluation Kit

## General Description

The MAX9716 evaluation kit (EV kit) is a fully assembled and tested circuit board that uses the MAX9716, a lowcost,  mono,  1.4W,  bridge-tied-load  (BTL)  audio  power amplifier with adjustable gain. Designed to operate from a 2.7V to 5.5V DC power supply, the EV kit is capable of delivering 1.4W into a 4Ω load with less than 1% THD+N.

The EV kit can be used to evaluate the MAX9717A/B/C/D. To  evaluate  the  MAX9717A  with  the  EV  kit,  replace the  MAX9716  IC  with  a  MAX9717A.  To  evaluate  the MAX9717B/C/D with the EV kit, replace the MAX9716 IC with a MAX9717B/C/D, remove resistors R1 and R2, and short the R1 pads.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| C1            |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106M |
| C2            |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0603) TDK C1608X7R1C104K |
| C3            |     1 | 0.47µF ±20%, 10V tantalum capacitor (0402) AVX TACK474M010      |
| C4            |     1 | 1µF ±10%, 10V X5R ceramic capacitor (0603) TDK C1608X5R1A105K   |
| C5            |     1 | 10µF ±20%, 6.3V tantalum capacitor (A case) AVX TAJA106M006     |

## Component Suppliers

| SUPPLIER        | PHONE        | WEBSITE               |
|-----------------|--------------|-----------------------|
| AVX Corporation | 843-946-0238 | www.avxcorp.com       |
| TDK Corp.       | 847-803-6100 | www.component.tdk.com |

Note:

Indicate that you are using the MAX9716/MAX9717 when contacting these component suppliers.

<!-- image -->

## Evaluates: MAX9716/MAX9717A/B/C/D

## Features

- Single Power Supply: 2.7V to 5.5V
- 10nA (typ) IC Shutdown Current
- 1.4W into 4Ω at 1% THD+N
- 1.1W into 8Ω
- Resistor Adjustable Gain (MAX9716/MAX9717A)
- Surface-Mount Construction
- Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9716EVKIT# | EV Kit |

Note: To evaluate the MAX9717A/B/C/D, request a MAX9717AETA/MAX9717BETA/MAX9717CETA/MAX9717DETA free sample with the MAX9716 EV kit.

| DESIGNATION   |   QTY | DESCRIPTION                                     |
|---------------|-------|-------------------------------------------------|
| JU1           |     1 | 4-pin header                                    |
| JU2           |     1 | 3-pin header                                    |
| OUT           |     1 | 3.5mm SMT stereo headphone jack                 |
| R1, R2        |     2 | 10kΩ ±1% resistors (0603)                       |
| U1            |     1 | Audio power amplifier Maxim MAX9716ETA (8 TDFN) |
| U2            |     0 | Not installed, MAX9716EUA (8 µMAX ®)            |
| U3            |     0 | Not installed, MAX9716EBL (9 UCSP™)             |
| -             |     2 | Shunts                                          |
| -             |     1 | PCB: MAX9716/7 EVALUATION KIT                   |

μMAX is a registered trademark and UCSP is a trademark of Maxim Integrated Products, Inc.

## MAX9716 Evaluation Kit

## Quick Start

The MAX9716 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

## Recommended Equipment

- 2.7V to 5.5V, 1A power supply
- Audio source (i.e., CD player, cassette player)
- 4Ω/8Ω speaker
- Headphone with 3.5mm plug (MAX9717 only)
- 1) Verify that JU2 has a shunt across pins 1 and 2 ( SHDN = high).
- 2) Verify that JU1 has a shunt across pins 1 and 3 (IN+ = BIAS).
- 3) Connect the speaker across OUT+ and OUT-.
- 4) Connect the 5.0V power supply to the VCC pad and the power-supply ground to the GND pad.
- 5) Connect the audio source to VIN- pad.
- 6) Turn on the power supply, and then turn on the audio source.
- 7) Plug in the headphone for the headphone mode (MAX9717 only).

## Table 1. JU1 Functions

| JU1 SHUNT POSITION     | IN+ PIN (MAX9716)   | BTL /SE PIN (MAX9717)                     |
|------------------------|---------------------|-------------------------------------------|
| Pins 1 and 2           | Not allowed         | BTL /SE = V CC , single-ended output mode |
| Pins 1 and 3 (default) | IN+ = BIAS          | Not allowed                               |
| Pins 1 and 4           | Not allowed         | BTL /SE = GND, BTL output mode            |

## Table 2. JU2 Functions

| JU2 SHUNT POSITION     | SHDN PIN          | EV KIT OUTPUT   |
|------------------------|-------------------|-----------------|
| Pins 1 and 2 (default) | Connected to V CC | Enabled         |
| Pins 2 and 3           | Connected to GND  | Disabled        |

## Evaluates: MAX9716/MAX9717A/B/C/D

## Detailed Description

## Jumper Selection

Jumper JU1 controls the IN+ pin (MAX9716) or BTL /SE pin (MAX9717). See Table 1 for JU1 function.

Jumper  JU2  controls  the SHDN pin  of  the  MAX9716/ MAX9717 IC. See Table 2 for JU2 functions.

## Gain Settings (MAX9716/MAX9717A)

R1 and R2 set the gain of the EV kit. The EV kit comes with  R1  and  R2  equal  to  10kΩ,  setting  the  BTL  gain  to 2V/V.  To  change  the  output-voltage  gain,  choose  R2 between  10kΩ  to  50kΩ.  The  BTL  output  gain  is  deter -mined by the following equation:

<!-- formula-not-decoded -->

where A V  is the desired BTL output-voltage gain.

For the MAX9717A, the gain of single-ended mode is set by A V = R2/R1.

## Evaluating MAX9717A/B/C/D

To  evaluate  the  MAX9717A  with  the  MAX9716  EV  kit, replace the MAX9716ETA with a MAX9717AETA. Change jumper JU1 position according to Table 1.

To  evaluate  the  MAX9717B/C/D  with  the  MAX9716  EV kit,  replace  the  MAX9716ETA  with  a  MAX9717BETA/ MAX9717CETA/MAX9717DETA, remove input and feed -back resistors R1 and R2, then short the R1 pads. The MAX9717B/C/D  has  internally  fixed  BTL  gains  of  6dB, 9dB, and 12dB, respectively. Change jumper JU1 position according to Table 1.

│

Figure 1. MAX9716 EV Kit Schematic

<!-- image -->

│

<!-- image -->

Figure 2. MAX9716 EV Kit Component Placement GuideComponent Side

Figure 3. MAX9716 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX9716 EV Kit PC Board Layout-Solder Side

<!-- image -->

## MAX9716 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                        | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------|-----------------|
|                 0 | 3/04            | Initial release                    | -               |
|                 1 | 8/09            | Updated figures                    | 3, 4            |
|                 2 | 10/20           | Updated Ordering Information table | 1               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: MAX9716/MAX9717A/B/C/D