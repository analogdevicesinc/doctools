<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAXADC-RTD Evaluation Kit

## Evaluates: MAX11213

## General Description

The  MAXADC-RTD evaluation kit  (EV  kit)  evaluates  the MAX11213  ultra-low-power,  16-bit,  serial-output  deltasigma  analog-to-digital  converter  (ADC)  with  programmable  gain.  The  EV  kit  provides  accurate  temperature measurements (error &lt; Q 0.3 N C) in the -15 N C to +100 N C range using a PT1000 platinum RTD temperature sensor. The RTD can be used in connection with the rest of the board, or wired for remote sensing. Do not immerse the RTD in water.

The EV kit includes Windows XP M -, Windows Vista M -, and Windows  7 M -compatible  software  for  data  acquisition through a USB cable.

| DESIGNATION      |   QTY | DESCRIPTION                                  |
|------------------|-------|----------------------------------------------|
| C1, C2           |     2 | 18pF Q 5%, 50V ceramic capacitors (0603)     |
| C3-C6, C13       |     5 | 1 F F Q 10%, 16V ceramic capacitors (0603)   |
| C7, C9, C10, C11 |     4 | 0.1 F F Q 10%, 25V ceramic capacitors (0603) |
| C8               |     1 | 10 F F Q 10%, 10V ceramic capacitor (0805)   |
| C12              |     1 | 1000pF Q 5%, 25V ceramic capacitor (0805)    |
| D1               |     1 | Green LED (0603)                             |
| D2               |     1 | Yellow LED (0603)                            |
| J1               |     0 | Not installed, 10-pin JTAG connector         |
| J2               |     1 | Mini-USB type-B receptacle                   |
| J11              |     0 | Not installed, 2-pin header                  |
| PT1000           |     1 | 1k I RTD temperature sensor (1206)           |

Windows, Windows XP, and Windows Vista are registered trademarks of Microsoft Corp.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Features

- S Accurate Temperature Measurement (Error &lt; ±0.3 N C)
- S Real-Time Data Acquisition Through the USB
- S USB-PC Connection (Mini-USB Type A to B)
- S USB Powered (External Power Supply Not Required)
- S Windows XP-, Windows Vista-, and Windows 7-Compatible Software
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                       |
|---------------|-------|-------------------------------------------------------------------|
| R2, R3        |     2 | 27 I Q 5% resistors (0603)                                        |
| R4            |     1 | 27k I Q 0.1%, 1/4W through-hole resistor                          |
| R5            |     0 | Not installed, resistor (1206)                                    |
| R6, R7        |     2 | 1k I Q 5% resistors (0603)                                        |
| R8            |     0 | Not installed, resistor (0402)                                    |
| TP1, TP2      |     0 | Not installed, 1-pin test points                                  |
| U1            |     1 | Ultra-low-power ADC (16 QSOP) Maxim MAX11213EEE+                  |
| U2            |     1 | 16-bit RISC microcontroller (64 LQFP) Maxim MAXQ622G-0000+        |
| U4            |     1 | Ultra-low-noise LDO linear regulator (5 SC70) Maxim MAX8511EXK33+ |
| Y1            |     1 | 12MHz crystal                                                     |
| -             |     1 | PCB: MAXADC-RTD#                                                  |

## MAXADC-RTD Evaluation Kit

## Evaluates: MAX11213

## Quick Start

The MAXADC-RTD board is a plug-n-play temperatureacquisition  EV  kit  that  connects  to  the  PC  through a  USB  cable.  The  MAXADC-RTD  provides  accurate temperature-measurement  readings  in  the  -15 N C  to +100 N C range and does not require an external power supply or a USB device driver. The RTD is soldered on a stick, which can be connected to the rest of the PCB or broken off for remote monitoring. The RTD's differential output must be connected to the ADC's inputs for proper measurement.

The kit is preloaded with default firmware that communicates  with  the  MAXADC-RTD  evaluation  software. Software can be installed and run on any Windowsbased system.

## MAXADC-RTD EV Kit Components

The EV kit comes with the following components:

- 1)  MAXADC-RTD evaluation board
- 2)  MAXADC-RTD GUI application

## Detailed Description of Hardware

The MAXADC-RTD board is loaded with the MAX11213 ultra-low-power,  16-bit,  fully  differential  ADC  with  programmable gain. The ADC communicates over the SPI K interface  to  Maxim's  16-bit  RISC  MAXQ622  microcontroller with built-in USB serial-interface engine (SIE). This microcontroller communicates to the PC through the USB as an HID device (see Figure 1).

The  MAXADC-RTD software  provides  features  for  realtime temperature monitoring and logging.

Figure 1. MAXADC-RTD Block Diagram

<!-- image -->

SPI is a trademark of Motorola, Inc.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Data Acquisition Through the MAXADC-RTD

Use  the  following  steps  to  acquire  data  through  the MAXADC-RTD:

- 1)  Connect the MAXADC-RTD board to a PC through the USB cable. The MAXADC-RTD board receives power from the USB.
- 2)  Visit www.maxim-ic.com/MAXADC-RTD to  download  and  run  the  MAXADC-RTD  GUI  application (no need for installation).
- 3)  The  status  bar  displays  the Hardware  Connected message  and  temperature  acquisition  begins  at 2.5sps. Data is also displayed in terms of voltage and code values read by the ADC (see Figure 2).

## MAXADC-RTD Extended Features

- The	MAX11213	ADC	on	the	EV	kit	board	is	connected with +3.3V reference. The input range is 0 to 3.3V.
- The	 MAXADC-RTD	 provides	 an	 external	 +3.3V, 100mA supply, to be used with any external circuit.
- The	ADC's	analog	inputs	are	connected	at	test	points A and B.
- The	EV	kit	provides	an	external	+5V,	300mA	supply	at J11, to be used with any external circuit (see Table 1).
- The	microcontroller	on	the	EV	kit	board	can	also	be programmed  with  custom  firmware  through  the  J1 JTAG connector (see Table 2).
- If	the	RTD	stick	is	broken	for	remote	monitoring,	exter -nal wires need to be connected from test points A and B on the RTD stick to the A and B test points on the EV kit board, respectively.
- Other	sensors	with	a	differential	 output	 can	 also	 be connected to the EV kit board at test points A and B, where A is directly connected to AINP (the positive differential input of the ADC) and B is directly connected to  AINN (the negative differential input of the ADC). Note: AINP is pulled up through resistor R4 and AINN is  grounded  through  resistor  R5  (shorted).  To  use different  values,  R4  needs  to  be  replaced  and  R5 needs to be installed after cutting the shorting trace.

## Table 1. MAXADC-RTD Connector J11 Description

|   PIN NO. | LABEL   | FUNCTION                                  |
|-----------|---------|-------------------------------------------|
|         1 | VUSB    | +5V, 300mA supply for an external circuit |
|         2 | GND     | Digital ground pin                        |

## MAXADC-RTD Evaluation Kit

## Evaluates: MAX11213

Figure 2. MAXADC-RTD GUI Application

<!-- image -->

Table 2. MAXADC-RTD Connector J1 Description

PIN NO.

1

2

3

4

LABEL

TCK

GND

TDO

+3V3

5

TMS

<!-- image -->

|   PIN NO. | LABEL   | FUNCTION                          |
|-----------|---------|-----------------------------------|
|         6 | RST     | Microcontroller MAXQ622 reset pin |
|         7 | N.C.    | No connection                     |
|         8 | N.C.    | No connection                     |
|         9 | TDI     | Test data input                   |
|        10 | GND     | Digital ground pin                |

FUNCTION

Test clock

Digital ground pin

Test data output

Supply voltage for reference only

Test mode select

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAXADC-RTD Evaluation Kit

## Evaluates: MAX11213

<!-- image -->

Figure 3. MAXADC-RTD EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAXADC-RTD Evaluation Kit

## Evaluates: MAX11213

<!-- image -->

Figure 4. MAXADC-RTD Component Placement GuideComponent Side

<!-- image -->

Figure 5. MAXADC-RTD Component Placement Guide-Solder Side

<!-- image -->

Figure 6. MAXADC-RTD PCB Layout-Component Side

<!-- image -->

Figure 7. MAXADC-RTD PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART        | TYPE   |
|-------------|--------|
| MAXADC-RTD# | EV Kit |

# Denotes RoHS compliant.

## MAXADC-RTD Evaluation Kit

## Evaluates: MAX11213

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/11            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.