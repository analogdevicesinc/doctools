<!-- lastmod 2022-08-02 -->
## MAX17633CEVKIT# Evaluation Kit

## General Description

The MAX17633CEVKIT# 5V output evaluation kit (EV kit) provides  a  proven  design  to  evaluate  the  MAX17633C high-voltage,  high-efficiency,  synchronous  step-down DC-DC converter. The EV kit is preset for 5V output at load  currents  of  3.5A  and  features  a  500kHz  switching frequency  for  optimum  efficiency  and  component  size. The  EV  kit  features  an  adjustable  input  undervoltage lockout,  adjustable  soft-start,  open-drain RESET signal, and external clock synchronization. EV kit specifications, settings, features and benefits are highlighted. The EV kit also provides a good layout example, which is optimized for  Conducted, Radiated EMI and thermal performance. For more details about the IC benefits and features, refer to the MAX17633 data sheet.

## Features

- Wide 6.5V to 36V Input Range
- Programmed 5V Output, 3.5A Load Current
- 500kHz Switching Frequency
- EN/UVLO Input, Resistor-Programmable UVLO Threshold
- Programmed 1ms Soft-Start Time
- Selectable PWM, PFM, and DCM Modes
- Open-Drain RESET Output Pulled Up To 5V of INTVCC
- Provision for External Frequency Synchronization
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested
- Complies with CISPR22(EN55022) Class B Conducted and Radiated Emissions

Ordering Information appears at end of data sheet.

## Evaluates: MAX17633 5V Output-Voltage Application

## Quick Start

## Recommended Equipment

- One MAX17633CEVKIT# EV kit
- One 0V to 36V DC, 5A power supply
- Load capable of sinking 3.5A current
- Digital voltmeter (DVM)

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

Caution: Do not turn on power supply until all connections are complete.

- 1) Set the input power supply at a voltage between 6.5V and 36V. Disable the power supply.
- 2) Connect the positive terminal of the input power supply to the VIN PCB pad and the negative terminal to the nearest PGND pad. Connect the positive terminal of the 3.5A load to the VOUT pad and the negative terminal to the nearest PGND pad.
- 3) Connect a DVM across the VOUT pad and the nearest PGND pad.
- 4) Verify  that  shunts  are  not  installed  on  jumper  JU1 (see Table 1 for details).
- 5) Select  the  shunt  position  on  jumper  JU2  according to  the  intended  mode  of  operation  (see  Table  2  for details).
- 6) Turn on the input power supply.
- 7) Enable the load.
- 8) Verify that the DVM displays 5V.

<!-- image -->

## MAX17633CEVKIT# Evaluation Kit

## Detailed Description of Hardware

The MAX17633CEVKIT# is designed to demonstrate the salient features of the MAX17633C. The EV kit includes an EN/UVLO pad and jumper JU1 to enable the output at a desired input voltage. The MODE/SYNC pad allows an external clock interface to synchronize the device. Jumper JU2  allows  selection  of  a  particular  mode  of  operation based on light-load performance requirements. An additional RESET pad is available for monitoring the status of the output voltage.

## Soft-Start Programming

The  EV  kit  offers  an  adjustable  soft-start  function  to limit  inrush  current  during  startup.  The  soft-start  time  is adjusted by the value of external soft-start capacitor C3, connected between SS and SGND. The selected output capacitance (C SEL ) and the output voltage (V OUT ) determine the minimum value of C3, as shown by the following equation:

<!-- formula-not-decoded -->

The soft-start time (t SS ) is related to the soft-start capacitor C3 by the following equation:

<!-- formula-not-decoded -->

For example, in order to program a 1ms soft-start time, C3 should be 5600pF.

## Enable/Undervoltage-Lockout (EN/UVLO) Programming

The  MAX17633  offers  an  Enable  and  adjustable  input undervoltage  lockout  feature.  In  this  EV  kit,  for  normal operation, leave EN/UVLO jumper (JU1) open. When JU1 is  left  open,  the  MAX17633  is  enabled  when  the  input voltage  rises  above  6.4V.  To  disable  MAX17633,  install a jumper across pins 2-3 on JU1. See Table 1 for JU1 settings. The EN/UVLO PCB pad on the EV kit supports external Enable/Disable control of the device. Leave JU1 open when external Enable/Disable control is desired. A potential divider formed by R1 and R2 sets the input voltage (V INU )  above  which  the  converter  is  enabled  when JU1 is left open.

## Evaluates: MAX17633 5V Output-Voltage Application

Choose R1 to be 3.32MΩ (max), and then calculate R2 as follows:

<!-- formula-not-decoded -->

where, V INU  is the voltage at which the device is required to turn on, and R1 and R2 are in kΩ .

For more details about setting the undervoltage lockout level, refer to the MAX17633 data sheet.

## Mode Selection (MODE)

The  EV  kit  provides  a  jumper  (JU2)  that  allows  the MAX17633 to operate in PWM, PFM, and DCM modes. Table 2 shows the MODE SELECTION (JU2) settings that can be used to configure the desired mode of operation. Refer to the MAX17633 data sheet for more details on the modes of operation.

## Table 1. Converter EN/UVLO Jumper (JU1) Settings

| SHUNT POSITION   | EN/UVLO PIN                                                | MAX17633C EV KIT OUTPUT                                 |
|------------------|------------------------------------------------------------|---------------------------------------------------------|
| 1-2              | Connected to VIN                                           | Enabled                                                 |
| Not Installed*   | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistors |
| 2-3              | Connected to SGND                                          | Disabled                                                |

*Default position

## Table 2. MODE Selection Jumper (JU2) Settings

| SHUNT POSITION   | MODE/SYNC PIN       | MAX17633C EV KIT OUTPUT   |
|------------------|---------------------|---------------------------|
| 1-2              | Connected to INTVCC | DCM mode of operation     |
| 2-3*             | Connected to SGND   | PWM mode of operation     |
| Not Installed    | Unconnected         | PFM model of operation    |

*Default position

│

## MAX17633CEVKIT# Evaluation Kit

## External Clock Synchronization (SYNC)

The EV kit provides SYNC PCB pad to synchronize the MAX17633 to an optional external clock. Leave Jumper (JU3)  open  when  external  clock  signals  are  applied.  In the presence of a valid external clock for synchronization, the  MAX17633  operates  in  PWM  mode  only.  For  more details about external clock synchronization, refer to the MAX17633 data sheet.

## Active-Low, Open-Drain Reset Output ( RESET )

The EV kit provides a RESET PCB pad to monitor the status of the converter. RESET goes high when VOUT rises above 95% (typ) of its nominal regulated output voltage. RESET goes low when VOUT falls below 92% (typ) of its nominal regulated voltage.

## Hot Plug-In and Long Input Cables

The MAX17633CEVKIT# PCB layout provides an optional electrolytic capacitor (C6, 10μF/50V). This capacitor limits the  peak  voltage  at  the  input  of  the  MAX17633C  when the DC input source is 'Hot-Plugged' to the EV kit input terminals  with  long  input  cables.  The  equivalent  series

## Evaluates: MAX17633 5V Output-Voltage Application

resistance  (ESR)  of  the  electrolytic  capacitor  dampens the oscillations caused by interaction of the inductance of the long input cables, and the ceramic capacitors at the buck converter input.

## Electromagnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter.  The  EMI  filter  attenuates  high-frequency  currents drawn by the switching power converter, and limits the noise injected back into the input power source.

The MAX17633CEVKIT# PCB has designated footprints for  the  placement  of  conducted  EMI  filter  components as per the optional Bill of Material (BOM). Use of these filter  components  results  in  lower  conducted  EMI  below CISPR22  Class  B  limits.  Cut  open  the  trace  at  L2 before  installing  conducted  EMI  filter  components.  The MAX17633CEVKIT# PCB layout is also designed to limit radiated  emissions  from  switching  nodes  of  the  power converter resulting in radiated emissions below CISPR22 Class B limits.

## MAX17633CEVKIT# Evaluation Kit

## MAX17633C EV Kit Performance Report

(V IN = 24V, L = 6.8μH (XAL5050-682ME), f SW = 500kHz, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAX17633 5V Output-Voltage Application

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

STEADY-STATE PERFORMANCE

<!-- image -->

│

## MAX17633C EV Kit Performance Report (continued)

(V IN = 24V, L = 6.8μH (XAL5050-682ME), f SW = 500kHz, unless otherwise noted.)

<!-- image -->

CONDITIONS: 35mA LOAD CURRENT, 5V OUTPUT, PFM MODE

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

CONDITIONS: 35mA LOAD CURRENT, 5V OUTPUT, DCM MODE

<!-- image -->

<!-- image -->

L2 = 15µH, C12 = 1µF/1206/100V/X7R, C13 = 4.7µF/1206/50V/X7R, C14 = 10µF/50V/X7R/1210

<!-- image -->

TUV Rheinland

MaximIC\_MAX17633

RE 30MHz-1GHz\_0-360deg\_90deg step\_1-4mtr Height\_Quick Scan\_Test7.TIL

Final\_ScanV

<!-- image -->

03:22:51 PM, Wednesday, November 28, 2018

│

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17633CEVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX17633

5V Output-Voltage Application

## Component Suppliers

| SUPPLIER        | WEBSITE               |
|-----------------|-----------------------|
| Coilcraft, Inc. | www.coilcraft.com     |
| Murata Americas | www.murata.com        |
| Panasonic Corp. | www.panasonic.com     |
| TDK Corp.       | www.component.tdk.com |
| Venkel Ltd.     | www.venkel.com        |
| SullinsCorp     | www.sullinscorp.com   |
| Taiyo Yuden     | www.t-yuden.com       |
| Vishay Dale     | www.vishay.com        |

Note: Indicate that you are using the MAX17633C IC when contacting these component suppliers.

│

## MAX17633C EV Kit Bill of Materials

|   S.NO | Ref Designator    | Value         | Description                       | Package             | Manufacturer Part No.   | Manufacturer     |   Qty |
|--------|-------------------|---------------|-----------------------------------|---------------------|-------------------------|------------------|-------|
|      1 | C1, C10           | 4.7µF         | SMT Capacitor-X7R/50V             | 1206                | GRM31CR71H475KA12       | Murata           |     2 |
|      2 | C2                | 2.2µF         | SMT Capacitor-X7R/6.3V            | 0603                | CGA3E1X7R0J225K080      | TDK              |     1 |
|      3 | C3                | 5600PF        | SMT Capacitor-X7R/25V             | 0402                | GRM155R71E562KA01       | Murata           |     1 |
|      4 | C4, C7            | 22µF          | SMT Capacitor-X7R/10V             | 1210                | GRM32ER71A226K          | Murata           |     2 |
|      5 | C5                | 0.1µF         | SMT Capacitor-X7R/16V             | 0402                | EMK105B7104KV           | Taiyo Yuden      |     1 |
|      6 | C6                | 10µF          | SMT Aluminum-Electrolytic-X7R/50V | 6.6mmx6.6mmx6.1mm   | EEE-FK1H100P            | Panasonic        |     1 |
|      7 | C8, C11, C16, C17 | 150pF         | SMT Capacitor-X7R/50V             | 0402                | C1005C0G2A151J050BA     | TDK              |     4 |
|      8 | C9                | 0.1µF         | SMT Capacitor-X7R/50V             | 0402                | C1005X7R1H104K050BE     | TDK              |     1 |
|      9 | JU1,JU2           | -             | 3-pin header                      | -                   | GRPB031VWVN-RC          | SULLINS          |     2 |
|     10 | L1                | 6.8µH         | SMT Inductor                      | 5.48mmx5.28mmx5.1mm | XAL5050-682ME           | Coilcraft        |     1 |
|     11 | R1                | 3.32M         | SMT Resistor                      | 0402                | Generic                 | Generic          |     1 |
|     12 | R2                | 787K          | SMT Resistor                      | 0402                | Generic                 | Generic          |     1 |
|     13 | R3                | 133k          | SMT Resistor                      | 0402                | Generic                 | Generic          |     1 |
|     14 | R4                | 28.7k         | SMT Resistor                      | 0402                | Generic                 | Generic          |     1 |
|     15 | R6                | 10K           | SMT Resistor                      | 0402                | Generic                 | Generic          |     1 |
|     16 | R7                | 0R            | SMT Resistor                      | 0402                | Generic                 | Generic          |     1 |
|     17 | U1                | 4.5V-36V,3.5A | Buck Converter                    | 20-Pin TQFN4mmx4mm  | MAX17633CATP+           | MAXIM INTEGRATED |     1 |

| CONDUCTED EMI FILTER COMPONENT DETAILS (OPTIONAL)   | CONDUCTED EMI FILTER COMPONENT DETAILS (OPTIONAL)   | CONDUCTED EMI FILTER COMPONENT DETAILS (OPTIONAL)   | CONDUCTED EMI FILTER COMPONENT DETAILS (OPTIONAL)   | CONDUCTED EMI FILTER COMPONENT DETAILS (OPTIONAL)   | CONDUCTED EMI FILTER COMPONENT DETAILS (OPTIONAL)   | CONDUCTED EMI FILTER COMPONENT DETAILS (OPTIONAL)   | CONDUCTED EMI FILTER COMPONENT DETAILS (OPTIONAL)   |
|-----------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|
| S.NO                                                | Ref Designator                                      | Value                                               | Description                                         | Package                                             | Manufacturer Part No.                               | Manufacturer                                        | Qty                                                 |
| 1                                                   | L2                                                  | 15µH                                                | SMT Inductor                                        | 4mmx4mm                                             | XAL4040-153                                         | Coilcraft                                           | 1                                                   |
| 2                                                   | C12                                                 | 1µF                                                 | SMT Capacitor-X7R/100V                              | 1206                                                | HMK316B7105KLHT                                     | Taiyo Yuden                                         | 1                                                   |
| 3                                                   | C13                                                 | 4.7µF                                               | SMT Capacitor-X7R/50V                               | 1206                                                | GRM31CR71H475KA12                                   | Murata                                              | 1                                                   |
| 4                                                   | C14                                                 | 10µF                                                | SMT Capacitor-X7R/50V                               | 1210                                                | GRM32ER71H106KA12                                   | Murata                                              | 1                                                   |

Evaluates: MAX17633

5V Output-Voltage Application

## MAX17633C EV Kit Schematic

<!-- image -->

## MAX17633CEVKIT# Evaluation Kit

## MAX17633C EV Kit PCB Layout

MAX17633C EV Kit - Top Silkscreen

<!-- image -->

Evaluates: MAX17633

5V Output-Voltage Application

│

## MAX17633C EV Kit PCB Layout (continued)

MAX17633C EV Kit - Top

<!-- image -->

│

## MAX17633C EV Kit PCB Layout (continued)

MAX17633C EV Kit - Layer2 GND

<!-- image -->

│

## MAX17633C EV Kit PCB Layout (continued)

MAX17633C EV Kit - Layer3 GND

<!-- image -->

│

## MAX17633C EV Kit PCB Layout (continued)

MAX17633C EV Kit - Bottom

<!-- image -->

Evaluates: MAX17633

│

## MAX17633CEVKIT# Evaluation Kit

## MAX17633C EV Kit PCB Layout (continued)

MAX17633C EV Kit - Bottom Silkcreen

<!-- image -->

│

## MAX17633CEVKIT# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 3/18            | Initial release                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | -               |
|                 1 | 5/18            | Updated TOC10-TOC11, Bill of Materials , and corrected typo in captions.                                                                                                                                                                                                                                                                                                                                                                                                                                                         | 5, 7, 9-14      |
|                 2 | 8/18            | Updated part number to MAX17633CEVKIT# and Bill of Materials .                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | 1-15            |
|               2.1 |                 | Corrected typo by adding overbar to RESET .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | 1               |
|                 3 | 2/19            | Updated General Description, Features, Soft-Start Programming, and Hot Plug-In and Long Input Cables sections, and Table 1 and Table 2; added TOC17 and TOC18, and the Enable/Undervoltage-Lockout (EN/UVLO) Programming, Mode Selection (MODE), External Clock Synchronization (SYNC), Active-Low, Open- Drain, Reset Output ( RESET ), and Electromagnetic Interference (EMI) sections; removed the Setting the Switching Frequency , and Adjusting the Output Voltage sections; replaced the Bill of Materials and Schematics | 1-3, 5, 7-8     |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html .

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim ,nteJrated reserYes the riJht to chanJe the circuitry and speci¿cations Zithout notice at any time.

│

Evaluates: MAX17633

5V Output-Voltage Application