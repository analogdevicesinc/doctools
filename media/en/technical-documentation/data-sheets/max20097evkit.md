<!-- lastmod 2022-08-03 -->
## MAX20097 Evaluation Kit

## General Description

The MAX20097 evaluation kit (EV kit) provides a proven design to evaluate the MAX20097 dual-synchronous buck controller for high-power, high-brightness (HB) LED drivers. The EV kit is set up as a dual-buck LED driver and operates from a DC supply voltage from 4.5V to 65V. The EV kit is configured to deliver up to 2A of current through the LEDS for both the channels. The total voltage of each of the 2 LED strings can vary from 3V to 55V.

## Features

- Input Voltage: 4.5V to 65V
- Drives 1 to 16 LEDs on Both Channels
- LED Current: 0A to 2A on Both Channels
- Demonstrates UVLO, Output Short Protection, Overload
- Demonstrates Current-Limit and Thermal-Shutdown Feature
- Proven PCB Layout and Thermal Design
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX20097

## Quick Start

## Required Equipment

- MAX20097 EV kit
- 5V to 65V, 5A DC power supply
- Four digital voltmeters
- Two series-connected LED strings rated to no less than 3A
- Two current probes to measure the HB LED current
- Small flat-blade screwdriver to turn the potentiometer
- Oscilloscope

## Procedure

The  MAX20097  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation.

Caution: Do not turn on power supply until all connections are complete.

- 1) Verify that all jumper positions are as shown in Table 1.
- 2) Connect one of the LED string anode to the LED1+ PCB pad and the cathode to GND1. Connect the second LED string anode to LED2+ PCB pad and cathode to GND2 PCB pad.
- 3) Connect a voltmeter across the LED1+ and GND1 PCB pads and another voltmeter between LED2+ and GND2 PCB pads.
- 4) Connect a voltmeter across the REFI1, REF2, and AGND test points.
- 5) Connect the power supply terminals to the IN and the GND3 PCB pads.
- 6) Clip a current probe across the wire connecting to the LEDs in both of the LED strings.
- 7) Turn on the power supply and set to a voltage greater than the maximum LED string voltage, but less than the 65V maximum input voltage.
- 8) Use a screwdriver to turn the potentiometer R23 until voltmeter reads 1.2V. Do the same with potentiometer R5.
- 9) Measure the LED current using the current probe in both the LED strings and verify the current is 2A.
- 10) Use a voltmeter to verify the expected LED string voltage for both channels.

<!-- image -->

## MAX20097 Evaluation Kit

Table 1. MAX20097 EV Kit Jumper Descriptions

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                     |
|----------|------------------|-----------------------------------------------------------------------------------------------------------------|
| J1       | Closed (Default) | Use the resistive divider to set the LED current on LED2+ string                                                |
| J1       | Open             | Use the external power supply on REFI2 to set the LED2+ current.                                                |
| J2       | Closed (Default) | Single power supply input for both the buck controllers                                                         |
| J2       | Open             | Powers up the LED2+ controller separately through IN2 and GND4 PCB pads.                                        |
| J3       | Open             | External PWM pulse generator to be applied on DIM2 test point.                                                  |
| J3       | 1-2 (Default)    | DIM2 pulled up to V CC for 100% PWM dimming.                                                                    |
| J3       | 2-3              | DIM2 input is GND and LED2+ string is disabled.                                                                 |
| J4       | 1-2 (Default)    | IN power supply connected to the IN pin of the device.                                                          |
| J4       | 2-3              | IN pin of the device shorted to V CC and external voltage between 4.5V to 5.5V can be forced on VCC test point. |
| J5       | Open             | External PWM pulse generator to be applied on DIM1 test point                                                   |
| J5       | 1-2 (Default)    | DIM1 pulled up to V CC for 100% PWM dimming.                                                                    |
| J5       | 2-3              | DIM1 input is GND and LED1+ string is disabled.                                                                 |
| J6       | Closed (Default) | Use the resistive divider to set the LED current on LED1+ string.                                               |
| J6       | Open             | Use the external power supply on REFI1 to set the LED current.                                                  |
| J7       | Closed (Default) | V CC and V IO shorted                                                                                           |
| J15      | Closed (Default) | Pull FLTB to V CC through 10k Ω resistor                                                                        |

│

Evaluates: MAX20097

## Detailed Description

The MAX20097 is a dual-channel, high-voltage,  synchronous N-channel high-current buck LED drivers. The device uses a proprietary average current mode control scheme to regulate the inductor current. This control method does not require  any  control  loop  compensation  while  maintaining nearly constant switching frequency. Inductor current sense is achieved by sensing the current in the bottom switching device. The MAX20097 integrates 2 fully synchronous buck controllers.  The  devices  operate  over  a  wide  input  range of 4.5V to 65V. The device is designed for high-frequency operation and can operate as high as 1MHz.

## Analog Dimming Control (REFI1, REFI2)

The EV kit demonstrates the analog dimming feature of the device. R22 and R23 form a resistor-divider between VCC and AGND and sets the voltage on REFI1 pin. R22 is a 10kΩ resistor and R23 is a 10kΩ potentiometer, with the  wiper  shorted  to  the  high  side  of  the  potentiometer. Using a flat-blade screwdriver, turn the wiper-adjustment pin  clockwise  to  increase  the  voltage  on  the  REFI1 input. Turn the wiper-adjustment pin counterclockwise to decrease the voltage on the REFI input. The REFI1 input allows  for  analog  dimming  of  the  LED  string  connected between  LED1+  and  GND1.  A  REFI1  input  voltage  of 0.2V or less turns off the LED driver. A REFI1 input volt -age between 0.2V and 1.2V provides linear dimming of the  LED  string. A  REFI  input  voltage  greater  than  1.2V sets the LED string current to maximum current (based on  the  current-sense  resistor).  The  analog  dimming  on channel 2 is controlled by the resistive-divider formed by R3 and R4 (potentiometer). Follow the same procedure as described for REFI1.

Alternatively,  the  analog  dimming  input  can  be  set  with an external power supply. Remove the shunt on J6 and connect an external power supply directly to the REFI1 test  point  to  perform  analog  dimming  on  LED1+  string. Remove the shunt on J1 and connect an external power supply directly to the REFI2 test point to perform analog dimming on LED2+ string.

## Pulse-Dimming Inputs (DIM1, DIM2)

The EV kit demonstrates the PWM dimming feature of the MAX20097. Remove the shunt on J5. Connect a PWM signal to the DIM1 test point. Vary the duty cycle to increase or decrease the intensity of the LED1+ string. The DIM1 and  DIM2  inputs  of  the  device  have  a  2V  (max)  rising threshold and a 0.8V (min) falling threshold and are compatible with 3.3V and 5V logic-level signals. Remove the shunt on J3 for PWM dimming on LED2+ string. Connect a PWM signal to the DIM2 test point. Vary the duty cycle to increase or decrease the intensity of the LED2+ string.

## Fault Indicator

The  EV  kit  demonstrates  the  fault-protection  features of  the  device,  which  include  short-LED,  open-LED,  and overtemperature protection. The FLTB output is an opendrain, active-low fault indicator.

## Current Monitor Output

The EV kit also demonstrates the current monitor output feature  of  the  device.  The  IOUTV1  and  IOUTV2  test points  output  a  voltage  which  is  a  measure  of  the  LED current.  Refer  to  the  MAX20096/MAX20097  data  sheet for the equation relating to the IOUTV1 and IOUTV2 voltage as well as the LED current.

## External VCC Input

The EV kit also demonstrates operation of the device with an external V CC  input. In this case, the internal LDO is not used. Move the shunt on J4 to pins 2-3. In this case, IN and V CC  pins of the device are shorted together. Apply an external power supply between 4.6V and 5.5V on the VCC test point to allow switching of the device.

## Separate Power Supply Inputs

The second (LED2+) buck controller can be driven with a separate power supply, if needed. Removing the shunt on J2 enables to do this. Connect the second power supply between IN2 and GND4 PCB pads.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20097EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX20097 EV Kit Bill of Materials

|   ITEM |   QTY | REF DES                                             | MAXINV              | MFG PART #                              | MANUFACTURER        | VALUE        | DESCRIPTION                                                                                                                                                                       | COMMENTS   |
|--------|-------|-----------------------------------------------------|---------------------|-----------------------------------------|---------------------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
|      1 |     9 | IN, IN2, AGND, GND1-GND4, LED1+, LED2+              | 01-9020BUSS20AWG-00 | 9020 BUSS                               | WEICO WIRE          | MAXIMPAD     | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                                          |            |
|      2 |     2 | C1, C28                                             | 20-0001U-CA96       | CGA4J3X7R1H105M125AB                    | TDK                 | 1UF          | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 50V; TOL=20%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                                                                    |            |
|      3 |     6 | C2, C6, C14, C16, C23, C27                          | 20-000U1-DA52       | CGA3E2X7R1H104K080AE                    | TDK                 | 0.1UF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO; SOFT TERMINATION                                                                |            |
|      4 |     4 | C3, C12, C18, C26                                   | 20-1000P-CA80       | CGA3E2C0G2A102J080AA                    | TDK                 | 1000PF       | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 100V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G; AUTO                                                                                 |            |
|      5 |     2 | C4, C20                                             | 20-0001U-CA22       | CGA3E1X7R1V105K                         | TDK                 | 1UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 35V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                                                                    |            |
|      6 |     4 | C9, C11, C17, C21                                   | 20-004U7-CA59       | CGA6M3X7S2A475K200AE                    | TDK                 | 4.7UF        | CAPACITOR; SMT (1210); CERAMIC CHIP; 4.7UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S; AUTO                                                                                 |            |
|      7 |     2 | C10, C19                                            | 20-00U22-BA63       | CGA3E3X7R1H224K080AB; GCM188R71H224KA49 | TDK; MURATA         | 0.22UF       | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.22UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                                                                 |            |
|      8 |     1 | C13                                                 | 20-002U2-CA73       | CGA3E1X7R0J225K080AC                    | TDK                 | 2.2UF        | CAPACITOR; SMT (0603); CERAMIC; 2.2UF; 6.3V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                                                                      |            |
|      9 |     1 | C15                                                 | 20-000U1-CA82       | CGA4J2X7R2A104K125AA                    | TDK                 | 0.1UF        | CAPACITOR; SMT (0805); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                                                                 |            |
|     10 |     2 | D1, D4                                              | 30-1N4448WS7F-00    | 1N4448WS-7-F                            | DIODES INCORPORATED | 1N4448WS-7-F | DIODE; SWT; SOD-323; PIV=75V; IF=0.5A                                                                                                                                             |            |
|     11 |     4 | D2, D3, D5, D6                                      | 30-B18013F-00       | B180-13-F                               | DIODES INCORPORATED | B180-13-F    | DIODE; SCH; SCHOTTKY BARRIER RECTIFIER; SMA; PIV=80V; IF=1A                                                                                                                       |            |
|     12 |     8 | VCC, DIM1, DIM2, FLTB, REFI1, REFI2, IOUTV1, IOUTV2 | 02-TPCOMP5007-00    |                                         | 5007 KEYSTONE       | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |            |
|     13 |     5 | J1, J2, J6, J7, J15                                 | 01-PCC02SAAN2P-21   | PCC02SAAN                               | SULLINS             | PCC02SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                                                                          |            |
|     14 |     3 | J3-J5                                               | 01-PCC03SAAN3P-21   | PCC03SAAN                               | SULLINS             | PCC03SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                                                                          |            |
|     15 |     2 | L1, L2                                              | 50-0047U-S44A       | MSS1278T-473ML                          | COILCRAFT           | 47UH         | INDUCTOR; SMT; FERRITE BOBBIN CORE; 47UH; TOL=+/-20%; 5.4A                                                                                                                        |            |

Evaluates: MAX20097

## MAX20097 EV Kit Bill of Materials (continued)

| ITEM   |   QTY | REF DES                              | MAXINV            | MFG PART #                                 | MANUFACTURER                | VALUE        | DESCRIPTION                                                                                                                                           | COMMENTS   |
|--------|-------|--------------------------------------|-------------------|--------------------------------------------|-----------------------------|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 16     |     4 | Q1-Q4                                | 90-BUK9Y10780E-21 | BUK9Y107-80E                               | NXP                         | BUK9Y107-80E | TRAN; N-CHANNEL 80V; 107MOHM LOGIC LEVEL MOSFET; NCH; LFPAK; PD-(37W); I-(11.8A); V-(80V)                                                             |            |
| 17     |     2 | R1, R24                              | 80-0453K-24       | ERJ-3EKF4533V                              | PANASONIC                   | 453K         | RESISTOR; 0603; 453K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                               |            |
| 18     |     4 | R2, R3, R21, R25                     | 80-024K9-24       | CRCW060324K9FK                             | VISHAY DALE                 | 24.9K        | RESISTOR; 0603; 24.9K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                              |            |
| 19     |     5 | R4, R14, R22, R29, R30               | 80-0010K-24       | CRCW060310K0FK; ERJ-3EKF1002               | VISHAY DALE; PANASONIC      | 10K          | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                    |            |
| 20     |     2 | R5, R23                              | 80-0010K-39A      | 3296W-1-103LF                              | BOURNS                      | 10K          | RESISTOR; THROUGH-HOLE- RADIAL LEAD; 3296 SERIES; 10K OHM; 10%; 100PPM; 0.5W; SQUARE TRIMMING POTENTIOMETER; 25 TURNS; MOLDER CERAMIC OVER METAL FILM |            |
| 21     |     2 | R6, R20                              | 80-000R1-CA25     | RUW3216FR100                               | SAMSUNG ELECTRONICS         |              | 0.1 RESISTOR; 1206; 0.1 OHM; 1%; 150PPM; 1W; THICK FILM                                                                                               |            |
| 22     |     8 | R7, R8, R10, R16, R18, R19, R31, R32 | 80-0000R-27       | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00 | VISHAY DALE/ROHM/ PANASONIC |              | 0 RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                                |            |
| 23     |     4 | R11-R13, R15                         | 80-004R7-19       | CRCW06034R70FN                             | VISHAY DALE                 |              | 4.7 RESISTOR; 0603; 4.7 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                            |            |
| 24     |     1 | U1                                   | 00-SAMPLE-01      | MAX20097AHI+                               | MAXIM                       | MAX20097AHI+ | EVKIT PART-IC; DRV; DUAL CHANNEL HIGH VOLTAGE BUCK LED DRIVER WITH SPI INTERFACE; PACKAGE OUTLINE: 21-0066; PACKAGE CODE: U28-1; TSSOP28              |            |
| 25     |     1 | PCB                                  | N/A               | MAX20097EVK                                | MAXIM                       | PCB          | PCB:MAX20097EVK                                                                                                                                       |            |
| TOTAL  |    88 |                                      |                   |                                            |                             |              |                                                                                                                                                       |            |

DO NOT PURCHASE(DNP)

ITEM

QTY

REF DES

1

2

TOTAL

2

8

10

PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)

ITEM

TOTAL

QTY

0

REF DES

MAXINV

MFG PART #

R9, R17

C5, C7, C8, C22,

C24, C25, C29, C30

N/A

N/A

MAXINV

N/A

N/A

MFG PART #

N/A

N/A

MANUFACTURER

MANUFACTURER

VALUE

OPEN

OPEN

VALUE

Evaluates: MAX20097

DESCRIPTION

RESISTOR; 0603; OPEN;

FORMFACTOR

CAPACITOR; SMT (0603);

OPEN; FORMFACTOR

DESCRIPTION

COMMENTS

COMMENTS

## MAX20097 EV Kit Schematic

Figure 1. MAX20097 EV Kit Schematic

<!-- image -->

## MAX20097 EV PCB Layouts

Figure 2. MAX20097 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX20097 EV Kit PCB Layout-Top Layer

<!-- image -->

Figure 4. MAX20097 EV Kit PCB Layout-Inner Layer 1

<!-- image -->

## MAX20097 EV PCB Layouts (continued)

Figure 5. MAX20097 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

Figure 6. MAX20097 EV Kit PCB Layout-Bottom Layer

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/18            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im Integrated reserves the right to change the circuitr\ and specifications without notice at an\ time.

│

Evaluates: MAX20097