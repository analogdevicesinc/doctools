<!-- lastmod 2022-08-02 -->
## MAXM17900 Evaluation Kit

## General Description

The  MAXM17900  evaluation  kit  (EV  kit)  is  a  demonstration  circuit  of  the  MAXM17900  ultra-small,  high  effi -ciency,  current  mode,  synchronous  step-down  DC-DC switching  power  module.  The  EV  kit  operates  over an  input-voltage  of  10V  to  24V  and  provides  up  to 100mA  load  current  with  a  5V  output  voltage.  The  EV kit  is  programmed  to  switch  at  a  frequency  of  600kHz. The  module  is  simple  to  use  and  easily  configurable with  minimal  external  components.  It  features  cycle-bycycle  peak  current-limit  protection,  undervoltage  lockout (EN/UVLO), and thermal shutdown.

The  EV  kit  comes  with  the  compact  10-pin  2.6mm  x 3mm  x  1.5mm  uSLIC™  package  MAXM17900  module installed,  and is rated to operate over the full industrial/ automotive -40°C to +125°C temperature range. For full specifications, features and benefits of the IC, refer to the MAXM17900 data sheet .

## Features

- Wide 10V to 24V Input
- ±1.75% Feedback Voltage Accuracy
- Output: 5V,100mA
- Internally Compensated
- All Ceramic Capacitors and Ultra-Compact Solution
- PFM or Force-PWM Mode of Operation
- Shutdown Current as Low as 1.2μA (typ)
- Programmable Soft-Start and Prebias Startup
- Open-Drain Power Good Output ( RESET pin)
- Programmable EN/UVLO Threshold
- Hiccup Overcurrent Protection (OCP)
- Overtemperature Protection (OTP)
- -40°C to +125°C Industrial/Automotive Temperature Range
- Complies with CISPR22 (EN55022) Class B Conducted and Radiated Emissions
- Passes Drop, Shock, and Vibration StandardsJESD22-B103, B104, B111

## Evaluates: MAXM17900 5V Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAXM17900EVKIT#, MAXM17900 evaluation kit
- 24V DC power supply
- Dummy load capable of sinking 100mA
- Digital voltmeter (DVM)
- 100MHz dual-trace oscilloscope

## Procedure

The  MAXM17900 EV kit is fully  assembled  and  tested. Please follow the steps below to verify the board opera -tion. Caution: Do not turn on the power supply until all connections are completed.

- 1) Set the power supply at a voltage between 10V and 24V. Disable the power supply.
- 2) Connect  the  positive  and  negative  terminals  of  the power supply to VIN and GND PCB pads, respectively.
- 3) Connect  the  positive  and  negative  terminals  of  the 100mA load to VOUT and GND PCB pads respectively, and the set the load to 0A.
- 4) Connect the DVM across the VOUT PCB pad and the GND PCB pad closest to VOUT PCB pad.
- 5) Enable the input power supply.
- 6) Verify the DVM across output display 5V.
- 7) Increase  the  load  up  to  100mA  to  verify  the  output voltage is 5V using DVM.

Ordering Information appears at end of data sheet.

uSLIC is a trademark of Maxim Integrated Products, Inc.

<!-- image -->

## Detailed Description of Hardware

The MAXM17900 EV kit is a proven circuit to demonstrate the  high-voltage,  high-efficiency,  and  compact  solution size of the MAXM17900 synchronous step-down DC-DC power  module.  The  output  voltage  is  preset  to  5V  to operate from 10V to 24V input and provides up to 100mA load current. The optimal frequency is set at 600kHz to maximize  efficiency  and  minimize  component  size.  The EV kit includes two test points, TP1 for monitoring the LX and TP2 for measuring the RESET voltage.

## Soft-Start Input (SS)

The module offers a fixed 5.1ms internal soft-start when the SS pin is left unconnected. When adjustable soft-start time is required, connect a capacitor from SS to GND to program the soft-start time. The minimum soft-start time is related to the output capacitance (C OUT ) and the output voltage (V OUT ) by the following equation:

<!-- formula-not-decoded -->

where t SS  is in milliseconds and C OUT  is in µF.

Soft-start time (t SS ) is related to the capacitor connected at SS (C 3 ) by the following equation:

<!-- formula-not-decoded -->

where t SS  is in ms and C 3  is in nF.

## Mode Selection (MODE)

The  device  features  a  MODE  pin  for  selecting  either forced-PWM or PFM mode of operation. If the MODE pin is  left  unconnected,  the  device  operates  in  PFM  mode at  light  loads.  If  the  MODE  pin  is  grounded,  the  device

## Evaluates: MAXM17900 5V Output-Voltage Application

operates  in  a  constant-frequency  forced-PWM  mode  at all loads. The mode of operation cannot be changed onthe fly during normal operation of the device. Refer to the MAXM17900 module datasheet for more information on the PWM and PFM modes of operation. Table 1 shows the EV kit jumper settings that can be used to configure the desired mode of operation.

## External Synchronization (RT/SYNC)

The RT/SYNC pin can be used to synchronize module's internal  oscillator  to  an  external  system  clock.  Refer  to the External Synchronization section in the MAXM17900 data sheet for  additional  information  on  configuring  the external clock synchronization.

## Reset Output ( RESET )

The  module  includes  an  open-drain RESET output  to monitor output voltage. RESET should be pulled up with an external resistor to the desired external power supply less than or equal to 5.5V. RESET goes high-impedance 2ms after the output rises above 95% of its nominal set value  and  pulls  low  when  the  output  voltage  falls  below 92% of the set nominal output voltage. RESET asserts low during the hiccup timeout period. In this EV kit, R7 resistor can be used to pull up the RESET to the output voltage.

## Table 1. Mode Configuration (J1)

| POSITION      | MODE PIN         | MAXM17900 OPERATION   |
|---------------|------------------|-----------------------|
| 1-2           | Connected to GND | PWM mode              |
| Not Installed | Open             | PFM mode              |

## EV Kit Performance Report

<!-- image -->

OUTPUT VOLTAGE vs. LOAD CURRENT

(5V OUTPUT, PWM MODE, f SW

V IN

=  24V

V IN = 12V

10

0

20

30

40

50

60

70

= 600kHz)

toc03

80

90

100

LOAD CURRENT (mA)

LOAD CURRENT TRANSIENT RESPONSE

(PWM MODE

V IN

VOUT

I OUT

= 12V, V OUT

= 5V, I OUT

= 0.05A TO 0.1A)

toc05

100µs/div

OUTPUT  VOLTAGE  (V)

5.05

5.00

4.95

4.90

4.85

4.80

4.75

4.70

50mV/div

(AC

COUPLED)

50mA/div

<!-- image -->

<!-- image -->

<!-- image -->

│

## EV Kit Performance Report (continued)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

│

## MAXM17900 EV Kit Bill of Materials

| S NO DESIGNATION   | QTY DESCRIPTION                                                                                      | MANUFACTURER PARTNUMBER - 1             | MANUFACTURER PARTNUMBER - 1                |
|--------------------|------------------------------------------------------------------------------------------------------|-----------------------------------------|--------------------------------------------|
| 1 C1               | 1 CAPACITOR; SMT (0805); CERAMIC CHIP; 2.2UF; 50V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R | TDK C2012X7R1H225K                      |                                            |
| 2 C2               | 1 CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 16V; TOL=10%; TG=-55 DEGC TO +105 DEGC; TC=X6S          | MURATA GRM21BC81C106KA73                |                                            |
| 3 C5               | 1 CAPACITOR; SMT (CASE_D); ALUMINUM- ELECTROLYTIC; 22UF; 50V; TOL=20%; TG=-40 DEGC TO +85 DEGC; AUTO | PANASONIC EEE-1HA220WAP                 |                                            |
| 4 C7, C11          | 2 CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R         | TDK CGA2B3X7R1H104K;C1005X7R1H104K050BB | MURATA GRM155R71H104KE14;GCM155R71H104KE02 |
| 8 R1               | 1 RESISTOR; 0402; 261K OHM; 1%; 100PPM; 0.063W; METAL FILM                                           | VISHAY DALE CRCW0402261KFK              |                                            |
| 9 R2               | 1 RESISTOR; 0402; 49.9K; 1%; 100PPM; 0.0625W; THICK FILM                                             | VISHAY DALE CRCW040249K9FK              | YAGEO 9C04021A4992FLHF3                    |
| 10 R3              | 1 RESISTOR; 0402; 69.8K OHM; 1%; 100PPM; 0.10W; THICK FILM                                           | PANASONIC ERJ-2RKF6982X                 |                                            |
| 11 R4              | 1 RESISTOR; 0402; 3.01M OHM; 1%; 100PPM; 0.063W; METAL FILM                                          | VISHAY DALE CRCW04023M01FK              |                                            |
| 12 R5              | 1 RESISTOR; 0402; 422K OHM; 1%; 100PPM; 0.063W; METAL FILM                                           | VISHAY DALE CRCW0402422KFK              |                                            |
| 13 R7              | 1 RESISTOR; 0402; 100K OHM; 1%; 100PPM; 0.10W; THICK FILM                                            | PANASONIC ERJ-2RKF1003X                 |                                            |
| 16 U1              | 1 EVKIT PART-IC; PACKAGE. CODE: M102A3+1                                                             | MAXM17900AMB+                           |                                            |
| 18 C4              | 0 PACKAGE OUTLINE 0805 NON-POLAR CAPACITOR                                                           | N/A                                     | N/A                                        |
| 19 C3              | 0 PACKAGE OUTLINE 0402 NON-POLAR CAPACITOR                                                           | N/A                                     | N/A                                        |

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAXM17900EVKIT# | EV KIT |

#Denotes RoHS compliant.

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| Murata Americas | www.murata.com    |
| Panasonic Corp. | www.panasonic.com |

Evaluates: MAXM17900

5V Output-Voltage Application

## MAXM17900 Evaluation Kit

## MAXM17900 EV Kit Schematic

<!-- image -->

│

## MAXM17900 EV Kit Schematic (continued)

<!-- image -->

│

## MAXM17900 Evaluation Kit

## MAXM17900 EV Kit PCB Layouts

MAXM17900 EV Kit PCB-Silk Top

<!-- image -->

MAXM17900 EV Kit PCB-GND Layer

<!-- image -->

## Evaluates: MAXM17900 5V Output-Voltage Application

MAXM17900 EV Kit PCB-Top Layer

<!-- image -->

MAXM17900 EV Kit PCB-PWR Layer

<!-- image -->

│

## MAXM17900 EV Kit PCB Layouts (continued)

MAXM17900 EV Kit PCB-Bottom Layer

<!-- image -->

MAXM17900 EV Kit PCB-Silk Bottom

<!-- image -->

│

## MAXM17900 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                                 | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 9/17            | Initial release                                                                                                                                                                                                                             | -               |
|                 1 | 8/18            | Updated the General Description, Features, Quick Start , and Detailed Description sections; added the Mode Selection (MODE) section and Table 1; replaced EV Kit Performance Report charts, Bill of Materials, Schematic , and PCB Layout . | 1-6             |
|               1.1 |                 | Corrected 24V and overbar typos                                                                                                                                                                                                             | 1               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html .

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAXM17900

5V Output-Voltage Application