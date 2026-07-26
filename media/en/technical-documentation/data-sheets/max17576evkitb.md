<!-- lastmod 2022-08-02 -->
## MAX17576EVKITB# Evaluation Kit

## General Description

The MAX17576EVKITB# evaluation kit (EV kit) provides a proven design to evaluate the MAX17576 high-voltage, high-efficiency,  synchronous  step-down  DC-DC converter.  The  EV  kit  is  preset  for  5V  output  at  load  currents up to 4A and features a 350kHz switching frequency for optimum  efficiency  and  component  size.  The  EV  kit features adjustable input undervoltage lockout, adjustable soft-start, open-drain RESET  signal, and external frequency  synchronization.  The  EV  kit  also  provides  a good layout example, which is optimized for conducted, radiated EMI and thermal performance. For more details about the IC benefits and features, refer to the MAX17576 IC data sheet.

## Features

- Operates from a 6.5V to 60V Input Supply
- 5V Output Voltage
- Up to 4A Output Current
- 350kHz Switching Frequency
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Adjustable Soft-Start Time
- MODE/SYNC Pin to Select Either PWM, PFM, or DCM Mode
- Open-Drain RESET Output
- External Frequency Synchronization
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested
- CISPR-22 Class B Compliant

Ordering Information appears at end of data sheet.

## Evaluates: MAX17576 5V Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX17576EVKITB#t
- 6.5V to 60V, 5A DC input power supply
- Load capable of sinking 4A
- Two digital voltmeters (DVM)

## Equipment Setup and Test Procedure

The  EV  kit is fully  assembled  and  tested.  Follow the steps below to verify the board operation. Caution: Do not turn on power supply until all connections are completed.

- 1) Set the power supply at a voltage of 6V. Then, disable the power supply.
- 2) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the 4A load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3) Connect one DVM across the VOUT PCB pad and the nearest PGND PCB pad, and the other DVM across the RESET PCB pad and SGND PCB pad.
- 4) Verify that shunts are not installed across any pins on jumper JU1 (see Table 1 for details).
- 5) Turn on the DC power supply.
- 6) Enable the load.
- 7) Increase the input voltage to 6.4V, which is above the EN/UVLO rising threshold.
- 8) Verify that the DVM across the VOUT PCB pad and the nearest PGND PCB pad displays 5V.
- 9) Verify that the DVM across the RESET PCB pad and the nearest SGND PCB pad displays 5V.
- 10)  The power supply voltage can be set at any voltage between 6.5V and 60V.
- 11)  Reduce the input voltage to 5V, which is below the EN/UVLO falling threshold.
- 12)  Verify that both the DVMs displays 0V.
- 13)  Disable the input power supply.

<!-- image -->

## . Detailed Description

The EV kit is designed to deliver 5V output at a load current up to 4A from a 6.5V to 60V input supply. The EV kit is  programmed  at  350kHz  switching  frequency  for  optimum efficiency and component size.

The EV kit includes an EN/UVLO PCB pad and jumper JU1 to enable the output at a desired input voltage. The MODE/SYNC PCB pad allows an external clock to synchronize the device. Jumper JU2 allows the selection of a particular MODE/SYNC of operation based on light-load performance  requirements.  An  additional RESET PCB pad is available for monitoring whether the converter output is in regulation or not.

## Soft-Start Input (SS)

The  EV  kit  offers  an  adjustable  soft-start  function  to limit  inrush  current  during  startup.  The  soft-start  time  is adjusted by the value of the external soft-start capacitor (C5)  connected  between  SS  and  SGND.  The  selected output capacitance (C SEL ) and the output voltage (V OUT ) determine the minimum value of C5, as shown by the following equation:

<!-- formula-not-decoded -->

The soft-start time (t SS ) is related to C5 by the following equation:

<!-- formula-not-decoded -->

For example, to program a 1ms soft-start time, C5 should be 5.6nF.

## Enable/Undervoltage-Lockout Level (EN/UVLO) Programming

The  MAX17576  offers  an  Enable  and  adjustable  input undervoltage lockout feature. In this EV kit, for normal operation, leave the EN/UVLO jumper (JU1) open. When JU1 is left open, the MAX17576 is enabled after the input voltage rises above 6.4V. To disable the MAX17576, install a jumper

## Table 1. Converter EN/UVLO Jumper (JU1) Settings

| SHUNT POSITION   | EN/UVLO PIN                                                | MAX17576_ OUTPUT                                        |
|------------------|------------------------------------------------------------|---------------------------------------------------------|
| 1-2              | Connected to VIN                                           | Enabled                                                 |
| Not installed*   | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistors |
| 2-3              | Connected to SGND                                          | Disabled                                                |

* Default position.

## Evaluates: MAX17576 5V Output-Voltage Application

across pins 2-3 on JU1. See Table 1 for JU1 settings. The EN/UVLO PCB pad on the EV kit supports external Enable/ Disable control of the device. Leave JU1 open when external  Enable/Disable  control  is  desired.  A  potential  divider formed by R1 and R2 sets the input voltage (V INU ) above which the converter is enabled when JU1 is left open.

Choose  R1  to  be  3.32MΩ  (max)  then  calculate  R2  as follows:

<!-- formula-not-decoded -->

where, V INU  is the voltage at which the device is required to  turn  on,  and  R1  and  R2  are  in  kΩ.  For  more  details about setting the undervoltage lockout level, refer to the MAX17576 data sheet .

## MODE Selection (MODE/SYNC)

The EV kit provides a jumper (JU2) that allows the MAX17576 to  operate  in  PWM,  PFM,  and  DCM modes. Refer to the MAX17576  data  sheet for  more  details  on  the  modes  of operation. Table 2 shows the mode selection (JU2) settings that can be used to configure the desired mode of operation.

## External Clock Synchronization (MODE/SYNC)

The EV kit provides a MODE/SYNC PCB pad to synchronize the MAX17576 to an optional external clock. Leave the  jumper  (JU2)  open  when  external  clock  signals  are applied. In the presence of a valid external clock for synchronization, the MAX17576 operates in PWM mode only. For  more  details  about  external  clock  synchronization, refer to the MAX17576 data sheet .

## Active-Low, Open-Drain Reset Output ( RESET )

The EV kit provides a RESET PCB pad to monitor the status of the converter. RESET goes high when VOUT rises above 95% (typ) of its nominal regulated output voltage. RESET goes low when VOUT falls below 92% (typ) of its nominal regulated voltage.

## Table 2. MODE Selection Jumper (JU2) Settings

| SHUNT POSITION   | MODE/SYNC PIN     | MAX17576_ MODE        |
|------------------|-------------------|-----------------------|
| Not installed    | Unconnected       | PFM mode of operation |
| 2-3*             | Connected to SGND | PWM mode of operation |
| 1-2              | Connected to V CC | DCM mode of operation |

* Default position.

│

## MAX17576EVKITB# Evaluation Kit

## Electro-Magnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter.  The  EMI  filter  attenuates  high-frequency  currents drawn by the switching power converter, and limits the noise injected back into the input power source.

The MAX17576EVKITB# PCB has designated footprints for  the  placement  of  conducted  EMI  filter  components as per the optional Bill  of  Material  (BoM).  Use  of  these filter components results in lower conducted EMI, below CISPR22 Class B limits. Cut open the trace at L1 before installing EMI filter components. The MAX17576EVKITB#

## EV Kit Test Report

(V IN  = 24V, unless otherwise noted.)

## EFFICIENCY vs. LOAD CURRENT

CONDITIONS: 5V OUTPUT, PWM MODE, f SW  = 350kHz

<!-- image -->

## EFFICIENCY vs. LOAD CURRENT

<!-- image -->

CONDITIONS: 5V OUTPUT, DCM MODE, f SW  = 350kHz

## Evaluates: MAX17576 5V Output-Voltage Application

PCB layout is also designed to limit radiated emissions from switching nodes of the power converter, resulting in radiated emissions below CISPR22 Class B limits.

## Hot Plug-In and Long Input Cables

The MAX17576EVKITB# PCB layout provides an optional electrolytic capacitor (CIN6 = 68μF/100V). This capacitor limits the peak voltage at the input of the MAX17576 when the DC input source is 'Hot-Plugged' to the EV kit input terminals  with  long  input  cables.  The  equivalent  series resistance  (ESR)  of  the  electrolytic  capacitor  dampens the oscillations caused by interaction of the inductance of the long input cables, and the ceramic capacitors at the buck converter input.

## EFFICIENCY vs. LOAD CURRENT

<!-- image -->

<!-- image -->

│

## EV Kit Test Report (continued)

<!-- image -->

## SOFT-START/SHUTDOWN THROUGH EN/UVLO

CONDITIONS: 5V OUTPUT, PWM MODE, 4A LOAD

<!-- image -->

## SOFT-START WITH PREBIAS VOLTAGE OF 2.5V

<!-- image -->

## Evaluates: MAX17576 5V Output-Voltage Application

<!-- image -->

<!-- image -->

<!-- image -->

CONDITIONS: 5V OUTPUT, PWM MODE, 4A LOAD

│

## EV Kit Test Report (continued)

<!-- image -->

CONDITIONS: 5V OUTPUT, PFM MODE, 20mA LOAD

## LOAD TRANSIENT BETWEEN 50mA AND 2A

<!-- image -->

<!-- image -->

## Evaluates: MAX17576 5V Output-Voltage Application

## LOAD TRANSIENT BETWEEN 0A AND 2A

<!-- image -->

## LOAD TRANSIENT BETWEEN 80mA AND 2A

<!-- image -->

<!-- image -->

CONDITIONS: 5V OUTPUT, PWM MODE, 4A LOAD

│

## MAX17576EVKITB# Evaluation Kit

## EV Kit Test Report (continued)

CIN7 = CIN9 = 4.7μF/100V/X7R/1206, L1 = 22uH

<!-- image -->

## Component Suppliers

| SUPPLIER         | WEBSITE           |
|------------------|-------------------|
| Coilcraft, Inc.  | www.coilcraft.com |
| Murata Americas  | www.murata.com    |
| Panasonic Corp.  | www.panasonic.com |
| TDK Corp.        | www.tdk.com       |
| Taiyo yuden Corp | www.ty-top.com    |

Note: Indicate that you are using the MAX17576 when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17576EVKITB# | EV Kit |

# Denotes RoHS compliant.

## Evaluates: MAX17576 5V Output-Voltage Application

TUV Rheinland Final\_ScanV

<!-- image -->

│

## MAX17576EVKITB# Bill of Materials

|   S.No | Designator       | Description                                                           |   Quantity | Manufacturer Part Number      |
|--------|------------------|-----------------------------------------------------------------------|------------|-------------------------------|
|      1 | C2, C3           | 0.1µF±10%; 16V; X7R; Ceramic Capacitor (0402)                         |          2 | MURATA GRM155R71C104KA88      |
|      2 | C4               | 2.2µF± 10%; 10V; X7R; Ceramic Capacitor (0603)                        |          1 | MURATA GRM188R71A225KE15      |
|      3 | C5               | 5600pF± 10%; 25V; X7R; Ceramic Capacitor (0603)                       |          1 | MURATA GRM1555C1H562GE01      |
|      4 | CIN1, CIN10, CO7 | 150pF± 10%; 100V; COG; Ceramic Capacitor (0402)                       |          3 | TDK C1005C0G2A151J050BA       |
|      5 | CIN2, CIN3, CIN5 | 4.7µF± 10%; 100V; X7R; Ceramic Capacitor (1206)                       |          3 | MURATA GRM31CZ72A475KE11      |
|      6 | CIN6             | 68µF± 20%; 100V; Aluminum-Electrolytic Capacitor                      |          1 | PANASONIC EEV-FK2A680Q        |
|      7 | CIN11            | 0.1µF±10%; 100V; X7R; Ceramic Capacitor (0603)                        |          1 | TAIYO YUDEN HMK107B7104KA     |
|      8 | CO1              | 22µF± 20%; 25V; X7R; Ceramic Capacitor (1210)                         |          1 | MURATA GRM32ER71E226ME15      |
|      9 | CO2              | 47µF± 20%; 10V; X7R; Ceramic Capacitor (1210)                         |          1 | MURATA GRM32ER71A476ME15      |
|     10 | CO6              | 0.1µF±10%; 50V; X7R; Ceramic Capacitor (0402)                         |          1 | TDK C1005X7R1H104K050BE       |
|     11 | JU1, JU2         | 3-pin header (36-pin header 0.1' centers)                             |          2 | SULLINS PEC03SAAN             |
|     12 | L3               | Inductor, 8.2μH, 9.9A (6.4mm x 6.6mm)                                 |          1 | COILCRAFT XAL6060-822ME       |
|     13 | R1               | 3.32MΩ, ±1%, 1/10W, Resistor (0603)                                   |          1 |                               |
|     14 | R2               | 787kΩ, ±1%, 1/10W, Resistor (0603)                                    |          1 |                               |
|     15 | R3               | 59kΩ, ±1%, 1/16W, Resistor (0402)                                     |          1 |                               |
|     16 | R4               | 143kΩ, ±1%, 1/16W, Resistor (0402)                                    |          1 |                               |
|     17 | R5               | 10kΩ, ±1%, 1/16W, Resistor (0402)                                     |          1 |                               |
|     18 | R6               | 31.6kΩ, ±1%, 1/16W, Resistor (0402)                                   |          1 |                               |
|     19 | R7               | 4.7Ω, ±1%, 1/16W, Resistor (0402)                                     |          1 |                               |
|     20 | SU1, SU2         | Shunt                                                                 |          2 | Sullins STC02SYAN             |
|     21 | U1               | High-Efficiency, Synchronous Step-down DC-DC Converter (TQFN 4mmx5mm) |          1 | MAXIM INTEGRATED MAX17576ATG+ |
|     22 | CIN7, CIN9       | OPTIONAL: 4.7μF ±10%, 100V, X7R, ceramic capacitor (1206)             |          2 | MURATA GRM31CZ72A475KE11      |
|     23 | L1               | OPTIONAL: Inductor, 22μH, 2.2A (5mm x 5mm)                            |          1 | COILCRAFT XAL5050-223ME       |
|     24 | CIN8             | OPEN: Capacitor (1210)                                                |          0 | N/A                           |
|     25 | CO9              | OPEN: Capacitor (0603)                                                |          0 | N/A                           |
|     26 | R7               | OPEN: Resistor (0402)                                                 |          0 | N/A                           |
|     27 | C1, C6           | OPEN: Capacitor (0402)                                                |          0 | N/A                           |
|     28 | CIN4, CO8        | OPEN: Capacitor (0603)                                                |          0 | N/A                           |
|     29 | CO3-CO5          | OPEN: Capacitor (0805)                                                |          0 | N/A                           |

| DEFAULT JUMPER TABLE   | DEFAULT JUMPER TABLE   |
|------------------------|------------------------|
| Jumper                 | Shunt Position         |
| JU1                    | Open                   |
| JU2                    | 2-3                    |

Evaluates: MAX17576

5V Output-Voltage Application

## MAX17576EVKITB# Schematic

<!-- image -->

## MAX17576EVKITB# PCB Layout

MAX17576 5V EV Kit-Top Silkscreen

<!-- image -->

MAX17576 5V EV Kit-Layer 2 GND

<!-- image -->

MAX17576 5V EV Kit-Top

<!-- image -->

MAX17576 5V EV Kit-Layer 3 GND

<!-- image -->

│

## MAX17576EVKITB# PCB Layout (continued)

MAX17576 5V EV Kit-Bottom

<!-- image -->

MAX17576 5V EV Kit-Silk Bottom

<!-- image -->

│

## MAX17576EVKITB# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 12/18           | Initial release                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | -               |
|                 1 | 9/20            | Updated the title and the General Description, Detailed Description, Soft- Start Input (SS), Hot Plug-In and Long Input Cables, and Component Suppli- ers sections, and Table 1-2, TOC07-TOC09 and TOC15-TOC16; replaced the Procedure, Regulator Enable/Undervoltage-Lockout Level (EN/UVLO), MODE Selection (MODE/SYNC), External Clock Synchronization (MODE/ SYNC), MAX17576EVKITB# Bill of Materials, MAX17576EVKITB# Sche- matic, and MAX17576EVKITB# PCB Layout sections; added the Active-Low, Open-Drain Reset Output ( RESET ) section | 1-10            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim InteJrated reserYes the riJht to chanJe the circuitry and speci¿cations Zithout notice at any time.

│

Evaluates: MAX17576

5V Output-Voltage Application