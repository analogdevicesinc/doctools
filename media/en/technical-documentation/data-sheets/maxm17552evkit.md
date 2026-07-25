<!-- lastmod 2022-08-02 -->
## MAXM17552 Evaluation Kit

## General Description

The  MAXM17552  evaluation  kit  (EV  kit)  is  a  demonstration  circuit  of  the  MAXM17552  ultra-small,  high  effi -ciency,  current  mode,  synchronous  step-down  DC-DC switching  power  module.  The  EV  kit  operates  over  a wide  input-voltage  of  14V  to  60V  and  provides  up  to 100mA  load  current  with  a  5V  output  voltage.  The  EV kit  is  programmed  to  switch  at  a  frequency  of  450kHz. The  module  is  simple  to  use  and  easily  configurable with  minimal  external  components.  It  features  cycle-bycycle  peak  current-limit  protection,  undervoltage  lockout (EN/UVLO), and thermal shutdown.

The  EV  kit  comes  with  the  compact  10-pin  2.6mm  x 3mm  x  1.5mm  uSLIC™  package  MAXM17552  module installed,  and is rated to operate over the full industrial/ automotive -40°C to +125°C temperature range. For full specifications, features and benifits of the IC, refer to the MAXM17552 data sheet.

## Features

- Wide 14V to 60V Input
- ±1.75% Feedback Voltage Accuracy
- Output: 5V,100mA
- Internally Compensated
- All Ceramic Capacitors and Ultra-Compact Solution
- PFM or Forced-PWM Mode of Operation
- Shutdown Current as Low as 1.2μA (typ)
- Programmable Soft-Start and Prebias Startup
- Open-Drain Power Good Output ( RESET pin)
- Programmable EN/UVLO Threshold
- Hiccup Overcurrent Protection (OCP)
- Overtemperature Protection (OTP)
- -40°C to +125°C Industrial/Automotive Temperature Range
- Complies with CISPR22 (EN55022) Class B Conducted and Radiated Emissions
- Passes Drop, Shock, and Vibration StandardsJESD22-B103, B104, B111

## Evaluates: MAXM17552 5V Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAXM17552EVKIT#, MAXM17552 evaluation kit
- 60V DC power supply
- Dummy load capable of sinking 100mA
- Digital voltmeter (DVM)
- 100MHz dual-trace oscilloscope

## Procedure

The  MAXM17552 EV kit is fully  assembled  and  tested. Please follow the steps below to verify the board opera -tion. Caution: Do not turn on the power supply until all connections are completed.

- 1) Set the power supply at a voltage between 14V and 60V. Disable the power supply.
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

The MAXM17552 EV kit is a proven circuit to demonstrate the  high-voltage,  high-efficiency,  and  compact  solution size of the MAXM17552 synchronous step-down DC-DC power  module.  The  output  voltage  is  preset  to  5V  to operate from 14V to 60V input and provides up to 100mA load current. The optimal frequency is set at 450kHz to maximize  efficiency  and  minimize  component  size.  The EV kit includes two test points, TP1 for monitoring the LX and TP2 for measuring the RESET voltage.

## Soft-Start Input (SS)

The module offers a fixed 5.1ms internal soft-start when the SS pin is left unconnected. When adjustable soft-start time is required, connect a capacitor from SS to GND to program the soft-start time. The minimum soft-start time is related to the output capacitance (C OUT ) and the output voltage (V OUT ) by the following equation:

<!-- formula-not-decoded -->

where t SS  is in milliseconds and C OUT  is in µF.

Soft-start time (t SS ) is related to the capacitor connected at SS (C 3 ) by the following equation:

<!-- formula-not-decoded -->

where t SS  is in ms and C 3  is in nF.

## Mode Selection (MODE)

The  device  features  a  MODE  pin  for  selecting  either forced-PWM or PFM mode of operation. If the MODE pin is  left  unconnected,  the  device  operates  in  PFM  mode at  light  loads.  If  the  MODE  pin  is  grounded,  the  device

## Evaluates: MAXM17552 5V Output-Voltage Application

operates  in  a  constant-frequency  forced-PWM  mode  at all loads. The mode of operation cannot be changed onthe-fly during normal operation of the device. Refer to the MAXM17552 module datasheet for more information on the PWM and PFM modes of operation. Table 1 shows EV kit jumper settings that can be used to configure the desired mode of operation.

## External Synchronization (RT/SYNC)

The RT/SYNC pin can be used to synchronize module's internal  oscillator  to  an  external  system  clock.  Refer  to the External Synchronization section in the MAXM17552 data sheet for  additional  information  on  configuring  the external clock synchronization.

## Reset Output ( RESET )

The  module  includes  an  open-drain RESET output  to monitor output voltage. RESET should be pulled up with an external resistor to the desired external power supply less than or equal to 5.5V. RESET goes high-impedance 2ms after the output rises above 95% of its nominal set value  and  pulls  low  when  the  output  voltage  falls  below 92% of the set nominal output voltage. RESET asserts low during the hiccup timeout period. In this EV kit, R7 resistor is used to pull up the RESET to the output voltage.

## Table 1. Mode Configuration (JU1)

| JU1 POSITION   | MODE PIN         | MAXM17552 OPERATION   |
|----------------|------------------|-----------------------|
| 1-2            | Connected to GND | PWM mode              |
| Not Installed  | Open             | PFM mode              |

│

## MAXM17552 Evaluation Kit

## EV Kit Performance Report

<!-- image -->

<!-- image -->

## Evaluates: MAXM17552 5V Output-Voltage Application

<!-- image -->

<!-- image -->

LOAD CURRENT TRANSIENT RESPONSE

<!-- image -->

│

## EV Kit Performance Report (continued)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

= 24V, V

CONDITIONS: V IN

OUT

= 5V, LOAD = 0.1A

│

## MAXM17552 EV Kit Bill of Materials

|   ITEM | REF_DES   |   QTY | MFGPART #         | MANUFACTURER   | VALUE         | DESCRIPTION                                                                                         |
|--------|-----------|-------|-------------------|----------------|---------------|-----------------------------------------------------------------------------------------------------|
|      1 | C1        |     1 | C2012X7S2A105K125 | TDK            | 1UF           | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S           |
|      2 | C2        |     1 | GRM21BZ71E106KE15 | MURATA         | 10UF          | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R           |
|      3 | C5        |     1 | EEE-FK1J220XP     | PANASONIC      | 22UF          | CAPACITOR; SMT (CASE_D8); ALUMINUM-ELECTROLYTIC; 22UF; 63V; TOL=20%; TG=-55 DEGC TO +105 DEGC; AUTO |
|      4 | C7, C11   |     2 | GCM155R71H104KE02 | MURATA         | 0.1UF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R          |
|      5 | R1        |     1 | CRCW0402261KFK    | VISHAY DALE    | 261K          | RESISTOR; 0402; 261K OHM; 1%; 100PPM; 0.063W; METAL FILM                                            |
|      6 | R2        |     1 | CRCW040249K9FK    | VISHAY DALE    | 49.9K         | RESISTOR; 0402; 49.9K; 1%; 100PPM; 0.0625W; THICK FILM                                              |
|      7 | R3        |     1 | CRCW040293K1FKED  | VISHAY DALE    | 93.1K         | RESISTOR; 0402; 93.1K OHM; 1%; 100PPM; 0.063W; METAL FILM                                           |
|      8 | R4        |     1 | RC0402JR-070RL    | YAGEO PHYCOMP  | 0             | RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM                                               |
|      9 | R7        |     1 | ERJ-2RKF1003X     | PANASONIC      | 100K          | RESISTOR; 0402; 100K OHM; 1%; 100PPM; 0.10W; THICK FILM                                             |
|     10 | U1        |     1 | MAXM17552AMB+     | MAXIM          | MAXM17552AMB+ | EVKIT PART-IC; COMPACT HIGH VOLTAGE; HIGH-EFFICIENCY STEP-DOWN POWER MODULE; PKG. CODE: M102A3+1    |
|     11 | C3        |     0 | N/A               | N/A            | OPEN          | PACKAGE OUTLINE 0402 NON-POLAR CAPACITOR                                                            |
|     12 | C4        |     0 | N/A               | N/A            | OPEN          | PACKAGE OUTLINE 0805 NON-POLAR CAPACITOR                                                            |
|     13 | R5        |     0 | N/A               | N/A            | OPEN          | PACKAGE OUTLINE 0402 RESISTOR                                                                       |

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAXM17552EVKIT# | EV KIT |

#Denotes RoHS compliant.

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| Murata Americas | www.murata.com    |
| Panasonic Corp. | www.panasonic.com |

│

Evaluates: MAXM17552

5V Output-Voltage Application

## MAXM17552 EV Kit Schematic

<!-- image -->

## MAXM17552 Evaluation Kit

## MAXM17552 EV Kit PCB Layouts

MAXM17552 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAXM17552 EV Kit PCB Layout-GND Layer

<!-- image -->

## Evaluates: MAXM17552 5V Output-Voltage Application

MAXM17552 EV Kit PCB Layout-Top Layer

<!-- image -->

MAXM17552 EV Kit PCB Layout-Inner Layer

<!-- image -->

│

## MAXM17552 EV Kit PCB Layouts (continued)

MAXM17552 EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAXM17552 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

│

## MAXM17552 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                                                      | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 9/17            | Initial release                                                                                                                                                                                                                                                  | -               |
|                 1 | 10/18           | Updated the General Description, Features, Quick Start, Detailed Description, and Reset Outpu ( RESET ) sections; added the Mode Selection (MODE) section and Table 1; replaced EV Kit Performance Report charts, Bill of Materials, Schematic, and PCB Layout . | 1-8             |
|               1.1 |                 | Corrected missing overbar                                                                                                                                                                                                                                        | 1               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html .

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAXM17552

5V Output-Voltage Application