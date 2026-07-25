<!-- lastmod 2022-08-05 -->
## MAX11311PMB# Peripheral Module

## General Description

The MAX11311PMB# peripheral module (Pmod™) provides the  necessary  hardware  to  interface  the  MAX11311 12-channel programmable mixed-signal I/O device to any system  that  utilizes  Pmod-compatible  expansion  ports configurable for SPI communication. The device is a 12-bit multichannel  analog-to-digital  converter  (ADC)  and  a 12-bit buffered DAC output in a single IC. This device also includes software-configurable general-purpose I/O ports. A local and two remote temperature sensors keep track of junction  and  environmental temperatures. Adjacent pairs of  ports  can  also  be  used  as  logic  translator  or  analog switch. Each pin can also be used as a positive input of a comparator with programmable threshold.

Refer to the MAX11311 IC data sheet for detailed information regarding  operation  of  the  device  and  the  USB2PMB1 (Munich)  adapter  board  data  sheet  for  detailed  information regarding  the  Munich  board  and  GUI.  Refer  to  the MAX11311 peripheral module and Munich adaptor board Quick Start Guide for step-by-step evaluation instructions. Refer  to  the  MAX11311  Configuration  Software  User Guide for detailed information using the design tool.

## Peripheral Module Board Photo

<!-- image -->

Pmod is a trademark of Digilent Inc.

Evaluates: MAX11311

## Benefits and Features

- Up to 12 12-Bit ADC Programmable Inputs
- Up to 12 12-Bit DACs with 25mA Current Capability
- 70mA max at +12V with On-Board Power Supply
- 30mA typ at -12V with On-Board Power Supply
- Use External Power Supply at VDDIO (VDDIO Jumper Removed) if More Current is Needed
- Up to 12 Digital I/Os
- Up to 12 Comparator Inputs
- Internal or External Reference for ADC and DAC
- Individually Selectable ADC References for Each Port
- Internal Temperature Sensor (-40°C to +125°C, ±3°C Accuracy)
- Two Remote Temperature-Measurement Controllers (-40°C to +150°C, ±3°C Accuracy)
- 2x6-Pin Pmod-Compatible Connector (SPI)
- RoHS Compliant
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX11311PMB# Peripheral Module

## Detailed Description

## SPI Interface

The  MAX11311PMB#  Pmod  can  plug  directly  into  a Pmod-compatible  port  (configured  for  SPI)  through  the X1 connector. For information on the SPI protocol, refer to the MAX11311 IC data sheet.

- Connector X1 provides connection of the module to the Pmod host. See Table 1 and Figure 1 for detailed description.
- Connector JP1 provides selection of +3.3V either from the PMOD\_SUPPLY or an external supply, X2.
- Connectors SV1 and SV2 provide connection to the IC pins (MAX11311 ports 0-11). Connector SV3 is ground.
- Connectors EXT\_TEMP1 and EXT\_TEMP2 provide connection to the external temperature sensors.
- Connector VDDIO provides connection to the AVDDIO pins of the device, which is connected to the +12V power supply
- Connector VSSIO provides connection to the AVSSIO pins of the device, which is the analog negative supply for mixed-signal ports. Install VSSIO from 1 to 2 to connect AVSSIO to ground. Install VSSIO from 2 to 3 to connect AVSSIO to -12V.

## Table 1. Connector X1 (SPI Communication)

| PIN   | SIGNAL   | DESCRIPTION                                                                      |
|-------|----------|----------------------------------------------------------------------------------|
| 1     | CS       | Chip Select. Assert low to enable the SPI interface.                             |
| 2     | MOSI     | MAX11311 Serial Data Input                                                       |
| 3     | MISO     | MAX11311 Serial-Data Output                                                      |
| 4     | SCLK     | MAX11311 Serial-Clock Input                                                      |
| 5, 11 | GND      | Ground                                                                           |
| 6, 12 | +3.3V    | +3.3V Power Supplies                                                             |
| 7     | INTB     | Interrupt Open-Drain Output. Asserted low when the MAX11300 issues an interrupt. |
| 8     | -        | No Connection                                                                    |
| 9     | -        | No Connection                                                                    |
| 10    | CNVTB    | ADC Conversion Control Input. Assert low to initiate anADC conversion.           |

│

## Evaluates: MAX11311

Figure 1. X1: Pmod SPI Connector Pin Configuration

<!-- image -->

## MAX11311PMB# Peripheral Module

## Default Jumper Setting

Verify  that  all  jumpers  are  in  their  default  positions,  as follows:

- 1) Jumper VDDIO: Connect from VDDIO to +12V
- 2) Jumper VSSIO: Connect from VSSIO to GND
- 3) Jumpers EXT\_TEMP1 and EXT\_TEMP2: Open
- 4) Jumper JP1: Connect PMOD\_SUPPLY to +3.3V, JP1-1 to JP1-2.

## Power Supplies

The Pmod contains the MAX8752 step-up DC-DC converter (U3), which upconverts the +3.3V power supply from the Pmod  X1  connector  to  +13V.  The  MAX5084  (U2)  linear regulator then regulates the +13V input to +5V output voltage, providing power supply to the positive analog supply AVDD of the IC. Another MAX5084 (U1) provides a +12V power supply  to  the  positive  analog  supply  of  the  mixed-signal ports  (AVDDIO) of the IC. Additionally, the MAX629 (U5) provides  -12V  power  supply  to  the  VSSIO  from  +3.3V input.  For  bipolar  applications,  use  an  external  power supply to provide negative voltage for AVSSIO. See Figure 2.

## Software Graphical User Interface (GUI)

The Munich software GUI is provided to facilitate evaluation of the Pmod.

## Evaluates: MAX11311

Visit www.maximintegrated.com/evkitsoftware to download the latest version of the Munich GUI software. Refer  to  the  MAX11311PMB#  peripheral  module  and Munich (USB2PMB1) adapter board Quick Start Guide for step-by-step evaluation using the Munich GUI.

## External Power Supply

The on-board power supply provides 70mA max current at VDDIO = +12V. If additional current is needed, use an external power supply by removing the jumper connecting VDDIO to +12V and connecting a +12V external power supply to the VDDIO pin.

For  bipolar  applications,  remove  the  jumper  from  the VSSIO pin  to  GND  and  connect  it  from  pin  2  to  pin  3. See Figure 2 and refer to the MAX11311 IC data sheet for details.

## External Temperature Sensors

Two-pin  connector  vertical  headers,  EXT\_TEMP1  and EXT\_TEMP2, are provided to measure the environment temperature.  Connect  the  base  and  collector  of  diodeconnected transistors, such as the 2N3906 to the TEMP1 or TEMP2 pin and the emitter to the EXT pin to measure the external temperature. See Figures 3 and 4.

Figure 2. Power-Supply Block Diagram

<!-- image -->

│

## MAX11311PMB# Peripheral Module

## Evaluates: MAX11311

Figure 3. 2N3906 Diode-Connected Transistor Assembly (Not Included)

<!-- image -->

Figure 4. External Temperature Sensor Using Diode-Connected Transistor (Not Included)

<!-- image -->

│

## MAX11311PMB# Peripheral Module

## Component Suppliers

| SUPPLIER          | WEBSITE                  |
|-------------------|--------------------------|
| Pulse Electronics | www.pulseelectronics.com |
| TDK Corp.         | www.component.tdk.com    |
| TE Connectivity   | www.te.com               |

Note: Indicate that you are using the MAX11311PMB# when contacting these component suppliers.

## Component List, PCB Files, and Schematics

See the following links for component information, PCB files, and schematic:

- MAX1311PMB EV BOM
- MAX1311P MB EV PCB Layout
- MAX1311P MB EV Schematic

## Ordering Information

| PART          | TYPE                                       |
|---------------|--------------------------------------------|
| MAX11311PMB#  | Peripheral Module                          |
| USB2PMB1#     | Munich Adapter Board                       |
| MAX11311SYS1# | Peripheral Module and Munich Adapter Board |

# Denotes RoHS compliant.

Evaluates: MAX11311

│

## MAX11311PMB# Peripheral Module

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

│

Evaluates: MAX11311

## TITLE: Bill of Materials DATE: 10/05/2015

DESIGN: max11311pmb\_evkit\_b

ITEM REF\_DES

DNI/ DNP

QTY

MFG PART #

MANUF ACTURE R

VALUE

DESCRIPTION

1 C1, C2, C5, C15, C24

-

5 C1608X5R1A106K TDK

10UF

CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R

2 C3, C7, C8, C11, C14, C20

-

6 K

GRM188R71E105 KA12D; CGA3E1X7R1E105

MURAT A

1UF

CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 25V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R

3 C4, C6, C9, C10, C12, C16, C17, C19, C21-C23, C25, C27, C28, CP2, CP8, CP9, CP13

-

18 GRM188R71C104 K; C0603X7R160- 104KNE

C0603C104K4RAC

;

GCM188R71C104

KA37;

C1608X7R1C104K

;

KEMET/ MURAT A/TDK/ VENKEL LTD.

0.1UF

CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;

4 C13, C18

-

2 GRM21BR61E475 KA

MURAT

A

4.7UF

CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7UF; 25V; TOL=10%; MODEL=X5R; TG=-55 DEGC TO +125 DEGC; TC=+/

5 CP1, CP5, CP10-CP12

-

5 1

ECJ-2FF1A106Z; CC0805ZKY5V6BB

PANASO NIC/YAG EO

PHYCO

MP

10UF

CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 10V; TOL=+80%-20%; MODEL=Y5V;

TG= -30 DEGC TO +85 DEGC; T;

| 6 CP3     | -   | 1 C1608X5R1E225K ; TMK107ABJ225K A-T                                      | TDK/TAI YO YUDEN    | 2.2UF      | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 25V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R    |
|-----------|-----|---------------------------------------------------------------------------|---------------------|------------|------------------------------------------------------------------------------------------------------|
| 7 CP4     | -   | 1 C0603C224K3RAC ; GMC10X7R224K2 5; GRM188R71E224 KA88; C1608X7R1E224K 08 | KEMET; MURAT A; TDK | 0.22UF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.22UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R          |
| 8 CP6     | -   | 1 C0603HQN101- 200JNP                                                     | VENKEL LTD.         | 20PF       | CAPACITOR; SMT; 0603; CERAMIC; 20pF; 100V; 5%; C0G; - 55degC to + 125degC; 0 +/- 30PPM/degC          |
| 9 CP7     | -   | 1 C0603C0G500- 122KNP                                                     | VENKEL LTD.         | 1200PF     | CAPACITOR; SMT; 0603; CERAMIC; 1200pF; 50V; 10%; C0G; -55degC to + 125degC; 0 +/- 30PPM/degC         |
| 10 CP14   | -   | 1 C2012X7R1H225K                                                          | TDK                 | 2.2UF      | CAPACITOR; SMT (0805); CERAMIC CHIP; 2.2UF; 50V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R   |
| 11 CP15   | -   | 1 C0603C151K1GAC                                                          | KEMET               | 150PF      | CAPACITOR; SMT (0603); CERAMIC CHIP; 150PF; 100V; TOL=10%; MODEL=C0G; TG=-55 DEGC TO +125 DEGC; TC=+ |
| 12 D1     | -   | 1 CRS10I30A                                                               | TOSHIB A            | CRS10I30 A | DIODE; SCH; SMT (SOD-123F); PIV=30V; IF=1A                                                           |
| 13 D2, D3 | -   | 2 MBRS540T3G                                                              | ON SEMICO NDUCT OR  | MBRS540 T3 | DIODE; SCH; SURFACE MOUNT SCHOTTKY POWER RECTIFIER; SMC; PIV=40V; IF=5A                              |

| 14 EXT_TEMP1, EXT_TEMP2   | -   |   2 | PEC02SAAN                          | SULLINS                     | PEC02SA AN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                  |
|---------------------------|-----|-----|------------------------------------|-----------------------------|--------------------|--------------------------------------------------------------------------------------------|
| 15 ICD                    | -   |   1 | M22-2510605                        | HARWIN                      | M22- 2510605       | CONNECTOR; MALE; THROUGH HOLE; 2MMPITCH; SIL VERTICAL PIN HEADER ASSEMBLY; STRAIGHT; 6PINS |
| 16 J1                     | -   |   1 | DF11-6DP- 2DSA(24)                 | HIROSE ELECTRI C CO LTD     | DF11-6DP- 2DSA(24) | CONNECTOR; MALE; THROUGH HOLE; DF11 SERIES; DOUBLE- ROWCONNECTOR; STRAIGHT; 6PINS          |
| 17 JP1, VSSIO             | -   |   2 | PEC03SAAN                          | SULLINS                     | PEC03SA AN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                  |
| 18 L1                     | -   |   1 | DR74-3R3-R                         | COILTR ONICS                | 3.3UH              | INDUCTOR; SMT; FERRITE CORE; 3.3UH; TOL=+/-20%; 3.94A                                      |
| 19 L2                     | -   |   1 | DR74-470-R                         | COILTR ONICS                | 47UH               | INDUCTOR; SMT; FERRITE CORE; 47UH; TOL=+/-20%; 1.15A                                       |
| 20 R1, R4                 | -   |   2 | RG1005P-101-B- T5; ERA- 2AEB101X   | SUSUM U CO LTD./PA NASONI C | 100                | RESISTOR, 0402, 100 OHM, 0.1%, 25PPM, 0.0625W, THICK FILM                                  |
| 21 R2, R5, R8             | -   |   3 | CRCW0402100KF K; RC0402FR- 07100KL | VISHAY DALE; YAGEO PHICOM P | 100K               | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM                                      |

|   22 | R3              | -   |   1 | CRCW040212K0F K                    | VISHAY DALE                 | 12K           | RESISTOR, 0402, 12K OHM, 1%, 100PPM, 0.0625W, THICK FILM                |
|------|-----------------|-----|-----|------------------------------------|-----------------------------|---------------|-------------------------------------------------------------------------|
|   23 | R6, R9, R11-R15 | -   |   7 | CRCW040210K0F K; RC0402FR- 0710K   | DALE; YAGEO PHICOM P        | 10K           | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                    |
|   24 | R7              | -   |   1 | CRCW040240K2F K                    | VISHAY DALE                 | 40.2K         | RESISTOR; 0402; 40.2K OHM; 1%; 100PPM; 0.063W; THICK FILM               |
|   25 | R10             | -   |   1 | CRCW08052R00F N                    | VISHAY DALE                 |               | 2 RESISTOR, 0805, 2 OHM, 1%, 100PPM, 0.125W, THICK FILM                 |
|   26 | RG              | -   |   1 | CRCW04020000Z S                    | VISHAY DALE                 | 0             | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.063W; THICK FILM                   |
|   27 | RI1-RI6         | -   |   6 | RC0402JR-070RL; CR0402-16W- 000RJT | YAGEO PHYCO MP/VEN KEL LTD. | 0             | RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM                   |
|   28 | SV1-SV3         | -   |   3 | 22-28-4063                         | MOLEX                       | 22-28- 4063   | CONNECTOR; MALE; THROUGH HOLE; FLAT VERTICAL BREAKAWAY; STRAIGHT; 6PINS |
|   29 | U1,U2           | -   |   2 | MAX5084ATT+T                       | MAXIM                       | MAX5084 ATT+T | IC; VREG; LOW-QUIESCENT- CURRENT LINEAR REGULATOR; TDFN6                |
|   30 | U3              | -   |   1 | MAX8752ETA+                        | MAXIM                       | MAX8752 ETA+  | IC; CONV; TFT LCD STEP-UP DC- DC CONVERTER; TDFN8-EP                    |

<!-- image -->

| 31    | U4       | -   |   1 | MAX11311           | MAXIM       | MAX1131 1          | EVKIT PART-IC; MAX11311; PACKAGE OUTLINE: 21-0140; PACKAGE CODE: T3255-4; TQFN32-EP; NO FINAL DATASHEET   |
|-------|----------|-----|-----|--------------------|-------------|--------------------|-----------------------------------------------------------------------------------------------------------|
| 32    | U5       | -   |   1 | MAX629ESA+         | MAXIM       | MAX629E SA+        | IC; CONV; LOW-POWER HIGH- VOLTAGE BOOST OR INVERTING DC-DC CONVERTER; NSOIC8 150MIL                       |
| 33    | U7       | -   |   1 | ATTINY25-20SU      | ATMEL       | ATTINY25- 20SU     | IC; CTRL; ATMEL 8-BIT AVR MICROCONTROLLER WITH 2K BYTES IN-SYSTEM PROGRAMMABLE FLASH; WSOIC8              |
| 34    | VDDIO    | -   |   1 | 923345-01-C        | ?           | 923345- 01-C       | CONNECTOR; MALE; THROUGH HOLE; JUMPER WIRE; STRAIGHT; 2PINS                                               |
| 35    | X1       | -   |   1 | TSW-106-08-S-D- RA | SAMTEC      | TSW-106- 08-S-D-RA | CONNECTOR; THROUGH HOLE; POST TERMINAL STRIP ASSEMBLY; RIGHT ANGLE; 12PINS;                               |
| 36 X2 | -        |     |   1 | KLDX-0202-B        | KYCON       | KLDX- 0202-B       | CONNECTOR; FEMALE; THROUGH HOLE; DC POWER JACK; RIGHT ANGLE; 3PINS                                        |
| 37    | RU1, RU2 | DNP |   2 | CRCW04020000Z S    | VISHAY DALE | 0                  | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.063W; THICK FILM                                                     |
| 38 U6 | DNP      |     |   1 | PIC10F200-I/OTG    | MICROC HIP  | PIC10F20 0-I/OTG   | IC; CTRL; 6-PIN; 8-BIT FLASH MICROCONTROLLER; SOT23-6                                                     |

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

STEP-UP FOR VDDIO AND AVDD

<!-- image -->

NEGATIVE VOLTAGE FOR VSSIO

<!-- image -->

<!-- image -->