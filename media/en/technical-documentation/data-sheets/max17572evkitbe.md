<!-- lastmod 2022-08-02 -->
## MAX17572EVKITBE# Evaluation Kit

## General Description

The MAX17572EVKITBE# evaluation kit (EV kit) provides a proven design to evaluate the MAX17572 high-voltage, high-efficiency, synchronous step-down DC-DC converter. The EV kit is preset for 5V output at load currents up to 1A and features a 500kHz switching frequency for optimum efficiency and component size. The EV kit features adjustable input  undervoltage-lockout,  adjustable  soft-start,  opendrain RESET signal, and external clock synchronization. The EV kit also provides a good layout example, which is optimized for conducted, radiated EMI, and thermal performance. For more details about the IC benefits and features, refer to the MAX17572 data sheet.

## Features

- Operates From a 6.5V to 60V Input Supply
- Programmed 5V Output Voltage, 1A Load Current
- 500kHz Switching Frequency
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Adjustable Soft-Start Time
- Open-Drain RESET Output
- External Clock Synchronization
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested
- Complies with CISPR22(EN55022) Class B Conducted and Radiated Emissions

Ordering Information appears at end of data sheet.

Evaluates: MAX17572 in 5V

Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX17572EVKITBE#
- 6.5V to 60V, 2A DC input power supply
- Load capable of sinking 1A
- Digital voltmeter (DVM)

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation.

## Caution: Do not turn on power supply until all connections are completed .

- 1) Set the power supply at a voltage between 6.5V and 60V. Disable the power supply.
- 2) Connect the positive terminal of the power supply to the V IN  PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the 1A load to the V OUT  PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3) Connect the DVM across the V OUT  PCB pad and the nearest PGND PCB pad.
- 4) Verify that shunts are installed across pins 1-2 on jumper JU1 (see Table 1 for details).
- 5) Turn on the DC power supply.
- 6) Enable the load.
- 7) Verify that the DVM displays 5V

<!-- image -->

## MAX17572EVKITBE# Evaluation Kit

## Detailed Description of Hardware

The  MAX17572EVKITBE#  EV  kit  provides  a  proven design  to  evaluate  the  MAX17572  high-voltage,  high efficiency, synchronous step-down DC-DC converter. The EV kit is preset for 5V output from 6.5V to 60V input at load currents up to 1A and features a 500kHz switching frequency  for  optimum  efficiency  and  component  size. The EV kit includes an EN/UVLO PCB pad and jumper JU1 to enable the output at a desired input voltage. An additional RESET PCB  pad  is  available  for  monitoring whether the converter output is in regulation.

## Soft-Start Capacitor Selection

The  EV  kit  offers  an  adjustable  soft-start  operation  to reduce inrush current. The soft-start time is adjusted by the value of external soft-start capacitor (C5) connected between SS and SGND. The selected output capacitance (C SEL ) and the output voltage (V OUT ) determine the minimum required soft-start capacitor as follows:

<!-- formula-not-decoded -->

is  related  to  the  capacitor

The  soft-start time  (t SS ) connected at SS (C SS ) by the following equation:

<!-- formula-not-decoded -->

For  example,  to  program  a  2ms  soft-start  time,  a  12nF capacitor should be connected from the SS pin to GND.

## Enable/Undervoltage-Lockout (EN/UVLO) Programming

The  MAX17572  offers  an  Enable  and  adjustable  input undervoltage-lockout  feature.  In  this  EV  kit,  for  normal operation, leave the EN/UVLO jumper (JU1) open. When JU1  is  left  open,  the  MAX17572  is  enabled  when  the

## Evaluates: MAX17572 in 5V Output-Voltage Application

input voltage rises above 6.4V. To disable the MAX17572, install a jumper across pins 2-3 on JU1. See Table 1 for JU1 settings. The EN/UVLO PCB pad on the EV kit supports external Enable/Disable control of the device. Leave JU1  open  when  the  external  Enable/Disable  control  is desired.  A  potential  divider  formed  by  R1  and  R2  sets the  input  voltage  (VINU)  above  which  the  converter  is enabled when JU1 is left open.

Choose R1 to be 3.3MΩ (max), and then calculate R2 as follows:

<!-- formula-not-decoded -->

where, V INU  is the voltage at which the device is required to turn on, and R1 and R2 are in kΩ,

For more details about setting the undervoltage lockout level, refer to the MAX17572 data sheet.

## Active-Low, Open-Drain Reset Output ( RESET )

The EV kit provides a RESET PCB pad to monitor the status of the converter. RESET goes high when VOUT rises above 95% (typ) of its nominal regulated output voltage. RESET goes low when VOUT falls below 92% (typ) of its nominal regulated voltage.

## Hot Plug-In and Long Input Cables

The MAX17572EVKITBE# PCB layout provides an optional electrolytic capacitor (CIN4 = 33μF/80V). This capacitor limits the peak voltage at the input of the MAX17572 when the DC input source is 'Hot-Plugged' to the EV kit input terminals  with  long  input  cables.  The  equivalent  series resistance  (ESR)  of  the  electrolytic  capacitor  dampens the  oscillations  caused  by  interaction  of  the  inductance of the long input cables and the ceramic capacitors at the buck converter IC input.

## Table 1. Converter EN/UVLO Jumper (JU1) Settings

| SHUNT POSITION   | EN/UVLO PIN                                                | MAX17572 OUTPUT                                         |
|------------------|------------------------------------------------------------|---------------------------------------------------------|
| 1-2*             | Connected to VIN                                           | Enabled                                                 |
| Not installed    | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistors |
| 2-3              | Connected to SGND                                          | Disabled                                                |

* Default position.

│

## MAX17572EVKITBE# Evaluation Kit

## Electromagnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter.  The  EMI  filter  attenuates  high-frequency  currents drawn by the switching power converter and limits the noise injected back into the input power source.

The MAX17572EVKITBE# PCB has designated footprints on the bottom side for placement of EMI filter components. Use of these filter components results in lower conducted emissions below CISPR22 Class B limits. Remove the 0Ω resistor placed on the L1 footprint before installing conducted EMI filter components. The MAX17572EVKITBE# PCB layout is also designed to limit radiated emissions from switching nodes of the power converter resulting in radiated emissions below CISPR22 Class B limits

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| Coilcraft, Inc. | www.coilcraft.com |
| Murata Americas | www.murata.com    |
| Panasonic Corp. | www.panasonic.com |
| Vishay          | www.vishay.com    |
| Onsemi          | www.onsemi.com    |
| Taiyo Yuden     | www.ty-top.com    |

Note:

Indicate that you are using the MAX17572 when contacting these component suppliers.

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX17572EVKITBE# | EV KIT |

## Evaluates: MAX17572 in 5V Output-Voltage Application

Figure 1. Setting the Input Undervoltage Lockout

<!-- image -->

│

## MAX17572EVKITBE# Evaluation Kit

## EV Kit Performance Report

(V IN  = 24V, V OUT  = 5V, I OUT  = 1A, f SW  = 500kHz, T A  = +25ºC, unless otherwise noted.)

<!-- image -->

<!-- image -->

SOFT-START  WITH 2.5V PREBIAS VOLTAGE

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

│

## EV Kit Performance Report (continued)

(V IN  = 24V, V OUT  = 5V, I OUT  = 1A, f SW  = 500kHz, T A  = +25ºC, unless otherwise noted.)

<!-- image -->

CONDUCTED EMISSIONS PLOT

5V OUTPUT, 1A LOAD CURRENT

CISPR-22 CLASS B QP LIMIT

CISPR-22 CLASS B AVG LIMIT

PEAK EMISSIONS

1

10

toc10

30

FREQUENCY (MHz)

CONDITIONS: L1 = 10µH, C1 = 4.7µF/80V/X7R/1210

<!-- image -->

MAGNITUDE (dBµV)

100

90

80

70

60

50

40

30

20

10

0

0.15

│

## MAX17572EVKITBE# Bill of Materials

|   S.No | DESIGNATOR       | DESCRIPTION                                                                   |   QUANTITY | MANUFACTURER PART NUMBER                      |
|--------|------------------|-------------------------------------------------------------------------------|------------|-----------------------------------------------|
|      1 | C2               | 100pF 10%, 50V, COG, Ceramic capacitor (0402)                                 |          1 | KEMET C0402C101K5GAC; TDK C1005C0G1H101K050BA |
|      2 | C3               | 47pF 5%, 50V, COG, Ceramic capacitor (0402)                                   |          1 | MURATA GRM1555C1H470JA01                      |
|      3 | C4, C7, CO6, CO7 | 0.1µF 10%, 16V, X7R, 0402, Ceramic capacitor (0402)                           |          4 | TAIYO YUDEN EMK105B7104KV-F                   |
|      4 | C8               | 2.2µF 10%, 10V, X7R, Ceramic capacitor (0402)                                 |          1 | MURATA GRM188R71A225KE15                      |
|      5 | C10              | 5600pF 5%, 50V, COG, Ceramic capacitor (0402)                                 |          1 | MURTA GRM1555C1H562GE01                       |
|      6 | CIN1,CIN7        | 0.1µF 10%, 100V, X7R, Ceramic capacitor (0603)                                |          2 | TAIYO YUDEN HMK107B7104KA-T                   |
|      7 | CIN2             | 2.2µF 10%, 100V ,X7R,Ceramic capacitor (1210)                                 |          1 | TAIYO YUDEN HMK325B7225KM-P                   |
|      8 | CIN4             | ALUMINUM-ELECTROLYTIC; 33UF; 80V; TOL=20%; MODEL=FK SERIES                    |          1 | PANASONIC EEE-FK1K330P                        |
|      9 | CIN5             | 0.47µF 10%, 100V, X7R, Ce\ramic capacitor (0805)                              |          1 | AVX 08051C474KAT2A                            |
|     10 | CIN6             | 220pF 5%, 100V, COG, Ceramic capacitor (0402)                                 |          1 | TDK C1608C0G2A221J080AA                       |
|     11 | CO1              | 10µF 10%, 10V, X7R, Ceramic capacitor (1210)                                  |          1 | TAIYO YUDEN LMK325B7106KN-T                   |
|     12 | CO9              | 2.2µF 10%, 25V, X7R, Ceramic capacitor (0603)                                 |          1 | MURATA GRM188R71A225KE15                      |
|     13 | D1               | Diode PIV=30V; IF=0.2A                                                        |          1 | VISHAY BAT54WS-E3-08                          |
|     14 | L1               | RES+, 0Ω OHM, 1% (1812)                                                       |          1 | VISHAY DALE RCA12180000Z0EKLS                 |
|     15 | L3               | INDUCTOR, 15µH, 2.8A (4mm x 4mm)                                              |          1 | COILCRAFT XAL4040-153ME                       |
|     16 | R1               | RES+, 3.32MΩ, 1% (0402)                                                       |          1 | VISHAY DALE CRCW04023M32FK                    |
|     17 | R2               | RES+, 787KΩ, 1% (0402)                                                        |          1 | VISHAY DALE CRCW0402787KFK                    |
|     18 | R3               | RES+, 40.2KΩ, 1% (0402)                                                       |          1 | VISHAY DALE CRCW040240K2FK                    |
|     19 | R4               | RES+, 178KΩ, 1% (0402)                                                        |          1 | BOURNS CR0402-FX-1783GLF                      |
|     20 | R5               | RES+, 10KΩ, 1% (0402)                                                         |          1 | VISHAY DALE CRCW040210K0FK                    |
|     21 | R6               | RES+, 39KΩ, 1% (0402)                                                         |          1 | VISHAY DALE CRCW040239K0FK                    |
|     22 | R7               | RES+, 1KΩ, 1% (0402)                                                          |          1 | IMS RCC-0805-1001J                            |
|     23 | R8               | RES+, 4.7Ω, 1% (0402)                                                         |          1 | VISHAY DALE CRCW04024R70FK                    |
|     24 | U1               | HIGH-EFFICIENCY; SYNCHRONOUS STEP-DOWN DC-DC CONVERTER; (TDFN12-EP 3mm x 3mm) |          1 | MAX17572ATC+                                  |
|     25 | JU1              | 3-pin header (36-pin header 0.1' centers )                                    |          1 | Sullins: PEC03SAAN                            |
|     26 | -                | Shunts                                                                        |          1 | SULLINS STC02SYAN                             |
|     27 | MH1-MH4          | MACHINE SCREW; SLOTTED                                                        |          4 | EAGLE PLASTIC DEVICES P440.375                |
|     28 | MH1-MH4          | HEX STANDOFF #4-40 NYLON 3/8"                                                 |          4 | KEYSTONE ELECTRONICS 1902B                    |
|     29 | C1               | OPTIONAL: 4.7μF, 10%, 80V, X7R, Ceramic capacitor (1210)                      |          1 | MURATA GRM32ER71K475KE14                      |
|     30 | L1               | OPTIONAL: INDUCTOR, 10µH, 3.1A (4mm x 4mm)                                    |          1 | COILCRAFT XAL4040-103ME                       |
|     31 | CIN3, CO2        | OPEN: Capacitor (1210)                                                        |          0 |                                               |
|     32 | CO3, CO4, CO5    | OPEN: Capacitor (0805)                                                        |          0 |                                               |
|     33 | CO8              | OPEN: Capacitor (0603)                                                        |          0 |                                               |

| DEFAULT JUMPER TABLE   | DEFAULT JUMPER TABLE   |
|------------------------|------------------------|
| JUMPER                 | SHUNT POSITION         |
| JU1                    | 1 - 2                  |

## MAX17572EVKITBE# Evaluation Kit

## MAX17572EVKITBE# Schematic

<!-- image -->

│

## MAX17572EVKITBE# Evaluation Kit

## MAX17572EVKITBE# PCB Layout

MAX17572EVKITBE# PCB Layout-Top Silkscreen

<!-- image -->

MAX17572EVKITBE# PCB Layout-Layer 2

<!-- image -->

## Evaluates: MAX17572 in 5V Output-Voltage Application

MAX17572EVKITBE# PCB Layout-Top Layer

<!-- image -->

MAX17572EVKITBE# PCB Layout-Layer 3

<!-- image -->

│

## MAX17572EVKITBE# PCB Layout (continued)

MAX17572EVKITBE# PCB Layout-Bottom Layer

<!-- image -->

MAX17572EVKITBE# PCB Layout-Bottom Silkscreen

<!-- image -->

│

## MAX17572EVKITBE# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim InteJrated reserves the riJht to chanJe the circuitry and speci¿cations without notice at any time.

│

Evaluates: MAX17572 in 5V

Output-Voltage Application