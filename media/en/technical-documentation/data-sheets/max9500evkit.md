<!-- lastmod 2022-08-03 -->
## General Description

The MAX9500 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains a MAX9500 IC. The MAX9500 is a triple video-reconstruction filter and buffer for high-definition television (HDTV) applications. The filter's passband is 30MHz. The MAX9500 includes a +6dB output buffer capable of driving a 2VP-P video signal into a standard 150 Ω load.

The video input signals on the EV kit are DC-coupled. The video output signals from the EV kit can be AC- or DCcoupled. However, AC-coupling may degrade the tilt and droop quality of the video signal. The MAX9500 video input terminals are terminated at 75 Ω , and the output terminals are 75 Ω back terminated. The EV kit operates from a single 5V power supply. For dual-power-supply applications, use the MAX9501 EV kit.

## Component List

| DESIGNATION                         |   QTY | DESCRIPTION                                                      |
|-------------------------------------|-------|------------------------------------------------------------------|
| C1                                  |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106M  |
| C2, C3, C4                          |     3 | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E104K |
| C5, C6, C7                          |     0 | Not installed, capacitors (8mm x 10.2mm)                         |
| C8, C9, C10                         |     0 | Not installed, capacitors (0603)                                 |
| R1-R6                               |     6 | 75 Ω ±1% resistors (0805)                                        |
| U1                                  |     1 | MAX9500EEE (16-pin QSOP)                                         |
| YIN, YOUT, PBIN, PBOUT, PRIN, PROUT |     6 | 75 Ω BNC PC board mount connectors                               |
| -                                   |     1 | MAX9500 EV kit PC board                                          |

## Component Supplier

| SUPPLIER   | PHONE        | WEBSITE               |
|------------|--------------|-----------------------|
| TDK        | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX9500 EV kit when contacting this supplier.

## Recommended Equipment:

- 5V, 1A DC power supply (VCC)
- Video signal generator (e.g., Tektronix TG2000)
- Video measurement equipment (e.g., Tektronix VM5000 or equivalent)

The MAX9500 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Connect the output of the video signal generator to the YIN BNC connector on the MAX9500 EV kit.
- 2) Connect the YOUT BNC connector on the EV kit to the input of the video measurement equipment.
- 3) Connect the power-supply ground to the GND pad on the EV kit.
- 4) Connect the 5V supply to the VCC pad on the EV kit.
- 5) Set the video signal generator for the desired video input signal.
- 6) Turn on the power supply, and enable the video signal generator.
- 7) Analyze the video output signal with the video measurement equipment.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

<!-- image -->

## Features

- ♦ Single 5V Supply Operation
- ♦ Output Buffer Drives a 150 Ω Standard Video Load with a +6dB Gain
- ♦ High-Definition Television 30MHz Filter
- ♦ DC-Coupled Inputs
- ♦ DC- or AC-Coupled Outputs
- ♦ Standard 75 Ω Input/Output Terminations
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE    | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX9500EVKIT | 0°C to +70°C* | 16 QSOP      |

## Quick Start

## MAX9500 Evaluation Kit

## Detailed Description

The MAX9500 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains  a  MAX9500 IC. The MAX9500 is a triple videoreconstruction filter  and  buffer  for  HDTV  and  antialiasing applications. All three channels have identical characteristics.

The MAX9500 filter's passband is 30MHz. The device includes a +6dB output buffer capable of driving 2VP-P

video signal into a standard 150 Ω load. All  the  input signals on the MAX9500 EV kit are DC-coupled. The video output signals from the EV kit can be AC- or DCcoupled. However, AC-coupling may degrade the tilt and droop quality of the video signal. To evaluate the AC-coupled outputs, remove the PC trace shorts across C5, C6, and C7, and install capacitors C5-C10. The EV kit's  input  terminals  are  75 Ω terminated. The MAX9500 video output terminals are each back terminated at 75 Ω .

Figure 1. MAX9500 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9500 Evaluation Kit

<!-- image -->

Figure 2. MAX9500 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX9500 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9500 Evaluation Kit

Figure 4. MAX9500 EV Kit PC Board Layout-Solder Side

<!-- image -->

Figure 5. MAX9500 EV Kit Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

Heaney