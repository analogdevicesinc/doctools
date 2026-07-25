<!-- lastmod 2022-08-03 -->
## General Description

The MAX9654 evaluation kit (EV kit) is a fully assembled and tested surface-mount PCB that contains the MAX9654 triple-channel video-filter amplifier with selectable filtering for HD and SD video. The SD filter's passband is typically 8.5MHz and the HD filter's passband is  typically  42MHz.  The  MAX9654 also has shutdown control. The video inputs on the EV kit are AC-coupled; the video outputs can be AC- or DC-coupled. In addition, the MAX9654 video inputs are terminated with 75 Ω and the video outputs have a 75 Ω back termination resistor.  The  EV  kit  operates  from  a  single  3.3V  DC power supply.

| DESIGNATION    |   QTY | DESCRIPTION                                                         |
|----------------|-------|---------------------------------------------------------------------|
| C1, C2, C3, C9 |     4 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K |
| C4, C7, C8     |     0 | Not installed, ceramic capacitors (0603)                            |
| C10            |     1 | 10µF ±10%, 6.3V X5R ceramic capacitor (0603) Murata GRM21BR60J106K  |
| JU1, JU2       |     2 | 3-pin headers                                                       |

<!-- image -->

Features

- ♦ Jumper-Selectable SD/HD Filtering
- ♦ Jumper-Selectable Enable/Shutdown
- ♦ Single 3.3V Supply Operation
- ♦ Output Buffer with a 2V/V Gain
- ♦ High-Definition or Standard-Definition Television Video Filter
- ♦ AC-Coupled Inputs
- ♦ Standard 75 Ω Input/Output Terminations
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9654EVKIT+ | EV Kit |

## Component List

| DESIGNATION                                                 |   QTY | DESCRIPTION                                                 |
|-------------------------------------------------------------|-------|-------------------------------------------------------------|
| PB_INPUT, PB_OUTPUT, PR_INPUT, PR_OUTPUT, Y_INPUT, Y_OUTPUT |     6 | 75 Ω BNC PCB vertical-mount connectors                      |
| R1-R6                                                       |     6 | 75 Ω ±5% resistors (0603)                                   |
| R7, R8, R9                                                  |     3 | 0 Ω ±5% resistors (0603)                                    |
| U1                                                          |     1 | 3-channel SD/HD video filter (10 µMAX ® ) Maxim MAX9654AUB+ |
| -                                                           |     1 | PCB: MAX9654 Evaluation Kit+                                |

## Component Supplier

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX9654 when contacting this component supplier.

µMAX is a registered trademark of Maxim Integrated Products, Inc.

## MAX9654 Evaluation Kit

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- 3.3V DC power supply (VCC) capable of 50mA
- Video signal generator (e.g., Tektronix TG-700 or similar)
- The appropriate video measurement equipment (e.g., Tektronix VM5000)

## Procedure

The MAX9654 EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that a shunt is placed on pins 1-2 of JU1 to enable the MAX9654.
- 2) Verify that a shunt is placed on pins 2-3 of JU2 to select HD video filtering.
- 3) Connect the outputs of the video signal generator to the Y\_INPUT, PB\_INPUT, and PR\_INPUT BNC connectors on the MAX9654 EV kit.
- 4) Connect  the  Y\_OUTPUT,  PB\_OUTPUT,  and PR\_OUTPUT BNC connectors on the EV kit to the input of the video measurement equipment.
- 5) Connect the power-supply ground to the GND pad on the EV kit.
- 6) Connect the 3.3V supply to the VDD pad on the EV kit.
- 7) Set the video signal generator for the desired video input signals.
- 8) Turn on the power supply and enable the video signal generator.
- 9) Analyze the video output signal.

## Detailed Description of Hardware

The MAX9654 EV kit is a fully assembled and tested surface-mount PCB that contains the MAX9654 triplechannel video-filter amplifier with selectable filtering for HD and SD video. The MAX9654 SD lowpass filter has ±1dB passband out to 8.5MHz and 57dB attenuation at 27MHz. The MAX9654 HD lowpass filter has ±1dB passband out to 42MHz and 50dB attenuation at 109MHz. The MAX9654 EV kit has three input channels to accept a full set of component video input signals.

The MAX9654 EV kit uses 0.1µF ceramic capacitors to AC-couple the video inputs to the MAX9654. The input capacitor stores a DC level such that the outputs are clamped to the appropriate DC voltage level. All video inputs have a 75 Ω termination to ground. The MAX9654 EV kit video outputs can be DC- or AC-coupled. By default,  0 Ω resistors  are  installed  on  R7,  R8,  R9,  and C4, C7, and C8 are open; each of the video outputs are configured to drive DC-coupled video loads. To configure the video outputs to drive the AC-coupled video loads, remove R7, R8, and R9, and install the 220µF capacitors on C4, C7, and C8.

## Shutdown Mode

The MAX9654 EV kit provides an option to configure the MAX9654 into shutdown mode. See Table 1 for shunt positions.

## Table 1. JU1 Jumper Selection

| SHUNT POSITION   | DESCRIPTION       |
|------------------|-------------------|
| 1-2              | Enable MAX9654    |
| 2-3              | Shut down MAX9654 |

## SD/HD Selection

The MAX9654 EV kit provides an option to configure the MAX9654 to filter the SD or HD video signal. See Table 2 for shunt positions.

## Table 2. JU2 Jumper Selection

| SHUNT POSITION   | DESCRIPTION        |
|------------------|--------------------|
| 1-2              | SD video filtering |
| 2-3              | HD video filtering |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9654 Evaluation Kit

Figure 1. MAX9654 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9654 Evaluation Kit

Figure 2. MAX9654 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX9654 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9654 Evaluation Kit

Figure 4. MAX9654 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5