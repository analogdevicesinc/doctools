<!-- lastmod 2022-08-03 -->
## General Description

The MAX9652 evaluation kit (EV kit) is a fully assembled and tested surface-mount PCB that contains the MAX9652 triple-channel, video-filter amplifier for highdefinition  television  (HDTV) applications. The filter's passband is typically 42MHz. The video inputs on the EV kit are AC-coupled; the video outputs can be AC- or DC-coupled. In addition, the MAX9652 video inputs are terminated with 75 Ω and the video outputs have a 75 Ω back termination resistor. The EV kit operates from a single 3.3V DC power supply.

| DESIGNATION    |   QTY | DESCRIPTION                                                         |
|----------------|-------|---------------------------------------------------------------------|
| C1, C2, C3, C9 |     4 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K |
| C4, C7, C8     |     0 | Not installed, ceramic capacitors (0603)                            |
| C10            |     1 | 10µF ±10%, 6.3V X5R ceramic capacitor (0603) Murata GRM21BR60J106K  |

<!-- image -->

## MAX9652 Evaluation Kit

Features

- ♦ Single 3.3V Supply Operation
- ♦ Output Buffer with a 2V/V Gain
- ♦ High-Definition Television Video Filter
- ♦ AC-Coupled Inputs
- ♦ Standard 75 Ω Input/Output Terminations
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9652EVKIT+ | EV Kit |

## Component List

| DESIGNATION                                                 |   QTY | DESCRIPTION                                                     |
|-------------------------------------------------------------|-------|-----------------------------------------------------------------|
| PB_INPUT, PB_OUTPUT, PR_INPUT, PR_OUTPUT, Y_INPUT, Y_OUTPUT |     6 | 75 BNC PCB vertical-mount connectors                            |
| R1-R6                                                       |     6 | 75 ±5% resistors (0603)                                         |
| R7, R8, R9                                                  |     3 | 0 ±5% resistors (0603)                                          |
| U1                                                          |     1 | 3-channel high-definition video filter (8 SO) Maxim MAX9652ASA+ |
| -                                                           |     1 | PCB: MAX9652 Evaluation Kit+                                    |

## Component Supplier

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX9652 when contacting this component supplier.

1

## MAX9652 Evaluation Kit

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- 3.3V DC power supply (VDD) capable of 50mA
- Video signal generator (e.g., Tektronix TG-700 or similar)
- The appropriate video measurement equipment (e.g., Tektronix VM5000)

## Procedure

The MAX9652 EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Connect the outputs of the video signal generator to the Y\_INPUT, PB\_INPUT, and PR\_INPUT BNC connectors on the MAX9652 EV kit.
- 2) Connect  the  Y\_OUTPUT,  PB\_OUTPUT,  AND PR\_OUTPUT BNC connectors on the EV kit to the input of the video measurement equipment.
- 3) Connect the power-supply ground to the GND pad on the EV kit.
- 4) Connect the 3.3V supply to the VDD pad on the EV kit.
- 5) Set the video signal generator for the desired video input signals.
- 6) Turn on the power supply and enable the video signal generator.
- 7) Analyze the video output signal.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Detailed Description of Hardware

The MAX9652 EV kit is a fully assembled and tested surface-mount PCB that contains the MAX9652 triplechannel, video-filter amplifier and buffer for HDTV applications. The MAX9652 filter has ±1dB passband out to 42MHz  and  50dB  attenuation  at  109MHz.  The MAX9652 EV kit has three input channels to accept a full set of component video input signals.

The MAX9652 EV kit uses 0.1µF ceramic capacitors to AC-couple the video input signals to the MAX9652. The input capacitor stores a DC level such that the outputs are clamped to the appropriate DC voltage level. All video inputs have a 75 Ω termination to ground. The MAX9652 EV kit video outputs can be DC- or AC-coupled. By default, 0 Ω resistors  are  installed  on  R7,  R8, R9, and C4, C7, and C8 are open; each of the outputs are configured to drive DC-coupled video loads. To configure the outputs to drive the AC-coupled video loads, remove R7, R8, and R9, and install the 220µF capacitors on C4, C7, and C8.

<!-- image -->

## MAX9652 Evaluation Kit

Figure 1. MAX9652 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9652 Evaluation Kit

Figure 2. MAX9652 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX9652 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9652 Evaluation Kit

Figure 4. MAX9652 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5