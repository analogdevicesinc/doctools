<!-- lastmod 2022-08-03 -->
## General Description

The MAX9890 evaluation kit (EV kit) provides a proven design to evaluate the MAX9890 stereo click-pop suppressor.

The MAX9890 EV kit printed-circuit board (PCB) comes with a MAX9890AETA+ installed (200ms switch turn-on time). To evaluate the 330ms switch turn-on time version, request a free sample of the MAX9890BETA+.

| DESIGNATION   |   QTY | DESCRIPTION                                                      |
|---------------|-------|------------------------------------------------------------------|
| C1            |     1 | 1µF ±20%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J105M   |
| C2            |     1 | 0.1µF ±20%, 16V ceramic capacitor (0603) Murata GRM188R71C104K   |
| C3, C4        |     2 | 100µF, 6.3V tantalum capacitors (T case) Nichicon F950J107MTAAQ2 |
| C5, C6        |     0 | Not installed, capacitors (T case)                               |

<!-- image -->

## Features

- ♦ 2.7V to 5.5V Single-Supply Operation
- ♦ 3.5mm Stereo Input and Output Jacks
- ♦ Lead-Free and RoHS-Compliant
- ♦ Proven PCB Layout
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9890EVKIT+ | EV Kit |

## Component List

*EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                                |
|---------------|-------|----------------------------------------------------------------------------|
| J1, J2        |     2 | Surface-mount, 1/8in stereo headset jacks                                  |
| JU1           |     1 | 3-pin header                                                               |
| U1            |     1 | Audio click-pop suppressor (8 TDFN-EP*) Maxim MAX9890AETA+ (Top Mark: AHA) |
| -             |     1 | Shunt                                                                      |
| -             |     1 | PCB: MAX9890 Evaluation Kit+                                               |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Nichicon USA                           | 858-824-1515 | www.nichicon-us.com         |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX9890 when contacting these component suppliers.

## MAX9890 Evaluation Kit

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- MAX9890 EV kit
- 5V DC power supply
- Stereo audio source
- Single-ended stereo headphone amplifier
- Stereo headphones

## Procedure

The MAX9890 is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify  that  jumper  JU1  is  in  its  default  position,  as shown in Table 1.
- 2) Connect headphones to J2.
- 3) Connect headphone amplifier output to J1.
- 4) Connect audio source to single-ended stereo headphone amplifier.

Figure 1. MAX9890 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 5) Connect power supply between VCC and GND.
- 6) Enable audio source.
- 7) Enable headphone amplifier.
- 8) Verify  that  audio  is  passed  to  headphones  without any audible clicks or pops.

## Detailed Description of Hardware

The MAX9890 EV kit provides a proven layout for the MAX9890.

## Table 1. MAX9890 EV Kit Jumper Descriptions

| JUMPER   | SHUNT POSITION   | DESCRIPTION                  |
|----------|------------------|------------------------------|
| JU1      | 1-2*             | SHDN = VCC, normal operation |
| JU1      | 2-3              | SHDN = GND, shutdown mode    |

- *Default position.

<!-- image -->

<!-- image -->

Figure 2. MAX9890 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX9890 Evaluation Kit

Figure 3. MAX9890 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9890 Evaluation Kit

Figure 4. MAX9890 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_