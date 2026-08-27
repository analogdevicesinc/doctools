<!-- lastmod 2022-11-22 -->
## MAX17573 Evaluation Kit

## Evaluates: MAX17573 in 5V and 3.3V OutputVoltage Applications

## General Description

The  MAX17573  evaluation  kit  (EV  kit)  provides  proven 3.3V  and  5V  designs  to  evaluate  the  MAX17573  highefficiency, wide input voltage Himalaya synchronous DCDC converter.  The  3.3V  application  circuit  delivers  load current up to 3.5A from a wide 4.5V to 60V input supply and  operates  at  a  500kHz  switching  frequency.  The  5V application circuit delivers load current up to 3.5A from a wide 6.5V to 60V input supply and operates at a 500kHz switching frequency.

Each application circuit on the EV kit features programmable  enable  and  input  Undervoltage  Lockout (UVLO), soft-start, open-drain RESET signal, and external  clock  synchronization.  The  EV  kit's  layout  is optimized  for  conducted  and  radiated  EMI  and  thermal performance.  For  more  details,  refer  to the Product Highlights section in the MAX17573 IC data sheet.

## Features

- Operates over a Wide Input Range
- MAX17573EVKITA#: VOUT1 = 3.3V, IOUT1 = 3.5A, VIN1 Range = 4.5V to 60V
- MAX17573EVKITB#: VOUT2 = 5V, IOUT2 = 3.5A, VIN2 Range = 6.5V to 60V
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Selectable PWM, PFM, and DCM Modes of Operation
- Adjustable Soft-Start Time
- RESET Output with a Pullup Resistor to an External Supply
- External Clock Synchronization
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested
- Complies with CISPR 32 (EN55032) Class B Conducted and Radiated Emissions

Ordering Information appears at end of data sheet.

319-100914; Rev 0; 05/22

## Quick Start

## Required Equipment

- MAX17573EVKITA#, MAX17573EVKITB#
- 60V, 3.5A DC input power supply
- Load capable of sinking 3.5A at 3.3V and 5V
- Two Digital Multimeters (DMM)

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Use the following steps to verify and test individual device operation.

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

1.  Set the input power supply at 3.9V for MAX17573EVKITA#  and  at  5.9V  for  MAX17573EVKITB#. Disable the power supply.
2.  Connect the positive terminal of the 60V power supply to  the  IN  PCB  pad  and  the  negative  terminal  to  the nearest PGND PCB pad.
3.  Connect the positive terminal of the corresponding load to the respective VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
4.  Connect one DMM across respective VOUT PCB pad and the nearest PGND PCB pad, and another DMM across the respective RESET PCB pad and the SGND PCB pad.
5. Verify that no shunts are installed on converter EN/UVLO jumpers (JU101, JU201). See  Table 1 for details.
6.  Select the shunt position on respective Mode selection jumpers  (JU102,  JU202)  according  to  the  intended mode of operation. See Table 2 for details.
7.  Turn on the DC input power supply.
8.  Enable the load.
9.  Observe that both the DMMs display 0V.
10.  Increase the input voltage to 4.5V or higher for MAX17573EVKITA# and to 6.5V or higher for MAX17573EVKITB#, which are above the EN/UVLO rising thresholds.
11.  Verify  the  DMM  across  the  output  terminals  displays 3.3V for MAX17573EVKITA# and 5V for MAX17573EVKITB#.
12.  Verify  the  DMM  across  the RESET PCB  pad  and SGND PCB displays 5V.
13.  Reduce  the  input  voltage  to  3.6V  for  MAX17573EVKITA# and to 5.3V for MAX17573EVKITB#, which are below the EN/UVLO falling thresholds.
14.  Verify both the DMMs display 0V.
15.  Disable the input power supply.

<!-- image -->

## Evaluates: MAX17573 in 5V and 3.3V OutputVoltage Applications

## Detailed Description of Hardware

The  MAX17573EVKITA#  and  MAX17573EVKITB#  EV  kits  are  designed  to  demonstrate  the  salient  features  of  the MAX17573 high-voltage, high-efficiency, synchronous step-down DC-DC converter in 5V and 3.3V applications. The EV kit consists of typical application circuits for 5V and 3.3V. These two circuits are electrically isolated from each other and hosted on the same PCB. Each of these circuits can be evaluated for its performance under different operating conditions by powering them from their respective input pins.

## Soft-Start Input (SS)

The EV kit offers an adjustable soft-start function to limit inrush current during start-up. The soft-start time is adjusted by the value of the external soft-start capacitor connected between SS and SGND. The selected output capacitance (CSEL) and the output voltage (VOUT) determine the minimum required soft-start capacitor CSS, as follows:

<!-- formula-not-decoded -->

The soft-start time (tSS) is related to the capacitor connected at SS (CSS) by the following equation:

<!-- formula-not-decoded -->

For example, to program a 1ms soft-start time, a 5600pF capacitor should be connected from the SS pin to SGND.

## Enable/Undervoltage Lockout Level (EN/UVLO) Programming

The MAX17573 offers an enable and adjustable input undervoltage lockout feature. In these EV kits, for normal operation, leave the EN/UVLO jumpers (JU101, JU201) open. When jumpers are left open, the MAX17573EVKITA# EV kit is enabled when the input voltage rises above 4.3V and MAX17573EVKITB# EV kit is enabled when the input voltage rises above 6.2V. To disable the converters, install shunts across pin 2-3 on jumpers (JU101, JU201). See Table 1 for jumper (JU101, JU201) settings. The EN/UVLO PCB pad on the EV kits support external Enable/Disable control of the device. Leave the jumpers open when external Enable/Disable control is desired. A potential divider formed by the resistors RUVL\_TOP (R101, R201) and RUVL\_BOT (R102, R202) at the EN/UVLO pin sets the input voltage (VINU), above which the converter is enabled when the jumpers are left open.

Choose RUVL\_TOP to be 3.32MΩ (max), and then calculate RUVL\_BOT as follows:

<!-- formula-not-decoded -->

where, VINU is the voltage at which the device is required to turn on. For more details about Setting the Input UndervoltageLockout Level, refer to the MAX17573 IC data sheet.

## Table 1. Converter EN/UVLO Jumper (JU101, JU201) Settings

| SHUNT POSITION   | EN/UVLO PIN                                                                                 | OUTPUT                                                                 |
|------------------|---------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| 1-2              | Connected to IN                                                                             | Enabled                                                                |
| Not installed*   | Connected to the center node of respective resistor-dividers (R101 and R102; R201 and R202) | Enabled, UVLO level is set by the resistor-divider between IN and SGND |
| 2-3              | Connected to SGND                                                                           | Disabled                                                               |

*Default position

## Mode Selection (MODE/SYNC)

The EV kits provide jumpers (JU102, JU202) that allow the converters to operate in PWM, PFM, and DCM modes. For more details on the modes of operation, refer to the MAX17573 data sheet. Table 2 shows the mode selection jumper (JU102, JU202) settings that can be used to configure the desired mode of operation for each converter.

## MAX17573 Evaluation Kit

## Evaluates: MAX17573 in 5V and 3.3V OutputVoltage Applications

## Table 2. Mode Selection Jumper (JU102, JU202) Settings

| SHUNT POSITION   | EN/UVLO PIN       | OUTPUT                |
|------------------|-------------------|-----------------------|
| 1-2              | Connected to VCC  | DCM mode of operation |
| 2-3*             | Connected to SGND | PWM mode of operation |
| Not installed    | Unconnected       | PFM mode of operation |

## External Clock Synchronization (MODE/SYNC)

The EV kits provide MODE/SYNC PCB pads to synchronize the MAX17573 to an optional external clock. Leave jumpers (JU102, JU202) open when external clock signals are applied. In the presence of a valid external clock for synchronization, the  MAX17573  operates  in  PWM  mode  only.  For  more  details  about External  Clock  Synchronization ,  refer  to  the MAX17573 IC data sheet.

## Active-Low, Open-Drain Reset Output ( RESET )

The EV kits provide RESET PCB pads to monitor the status of the converters. RESET goes high when VOUT rises above 95% (typ) of its nominal regulated output voltage. RESET goes low when VOUT falls below 92% (typ) of its nominal regulated voltage.

## Hot Plug-In and Long Input Cables

The MAX17573EVKITA# and MAX17573EVKITB# EV kit PCB layouts provide an optional electrolytic capacitor (CIN106, CIN206 = 68µF/100V). These capacitors limit the peak voltage at the input of the converters when the DC input source is hot plugged to the EV kit input terminals with long input cables. The Equivalent Series Resistance (ESR) of the electrolytic capacitor dampens the oscillations caused by interaction of the inductance of the long input cables and the ceramic capacitors at the converters input.

## Electromagnetic Interference (EMI)

Compliance to Conducted Emissions (CE) standards requires an Electromagnetic Interference (EMI) filter at the input of a switching power converter. The EMI filter attenuates high-frequency currents drawn by the switching power converter, and limits the noise injected back into the input power source.

The MAX17573EVKITA# and MAX17573EVKITB# PCBs have designated footprints for the placement of conducted EMI filter components per the optional Bill of Material (BoM). Use of these filter components results in lower conducted EMI below CISPR32 Class B limits. Cut open the trace at L102 and L202 before installing conducted EMI filter components. The PCB layouts are also designed to limit radiated emissions from switching nodes of the power converter, resulting in radiated emissions below CISPR32 Class B limits.

## MAX17573EVKITA# and MAX17573EVKITB# EV Kit Performance

(V IN1  = V IN2  = 24V, V OUT1  = 3.3V, V OUT2  = 5V, I OUT1  = I OUT2  = 3.5A, f SW  = 500kHz, T A  = +25°C, unless otherwise noted)

<!-- image -->

www.analog.com

Analog Devices | 4

## Evaluates: MAX17573 in 5V and 3.3V OutputVoltage Applications

## MAX17573 Evaluation Kit

<!-- image -->

## Evaluates: MAX17573 in 5V and 3.3V OutputVoltage Applications

## MAX17573 Evaluation Kit

<!-- image -->

## Evaluates: MAX17573 in 5V and 3.3V OutputVoltage Applications

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17573 Evaluation Kit

<!-- image -->

## Evaluates: MAX17573 in 5V and 3.3V OutputVoltage Applications

## MAX17573 Evaluation Kit

## MAX17573EVKITA# and MAX17573EVKITB# EV Kit Bill of Materials

|   S.No | DESIGNATOR                   | DESCRIPTION                                                                                               |   QUANTITY | MANUFACTURER PART NUMBER   |
|--------|------------------------------|-----------------------------------------------------------------------------------------------------------|------------|----------------------------|
|      1 | C101, C108, C201, C208       | 0.1µF, ±10%, 100V, X7R, Ceramic capacitor (0603)                                                          |          4 | MURATA GRM188R72A104KA35   |
|      2 | C102, C202                   | 0.01µF, ±10%, 100V, X7R, Ceramic capacitor (0603)                                                         |          2 | MURATA GRM188R72A103KA01   |
|      3 | C106, C206                   | ALUMINUM-ELECTROLYTIC; 68UF; 100V; TOL= ±20%; MODEL=EEV SERIES                                            |          2 | PANASONIC EEV-FK2A680Q     |
|      4 | C107, C109, C207, C209       | 4.7µF, ±10%, 100V, X7R, Ceramic capacitor (1206)                                                          |          4 | MURATA GRM31CZ72A475KE11   |
|      5 | C111, C211                   | 4700pF, ±10%, 100V, X7R, Ceramic capacitor (0402)                                                         |          2 | MURATA GRM155R72A472KA01   |
|      6 | C113, C213                   | 5600pF, ±2%, 50V, C0G, Ceramic capacitor (0402)                                                           |          2 | MURATA GRM1555C1H562GE01   |
|      7 | C114, C214                   | 2.2µF, ±10%, 10V, X7R, Ceramic capacitor (0603)                                                           |          2 | MURATA GRM188R71A225KE15   |
|      8 | C115, C125, C215, C225, C228 | 0.1µF, ±10%, 16V, X7R, Ceramic capacitor (0402)                                                           |          5 | MURATA GRM155R71C104KA88   |
|      9 | C118, C119, C219             | 47µF, ±20%, 10V, X7R, Ceramic capacitor (1210)                                                            |          3 | MURATA GRM32ER71A476ME15   |
|     10 | C218                         | 22µF, ±20%, 25V, X7R, Ceramic capacitor (1210)                                                            |          1 | MURATA GRM32ER71E226ME15   |
|     11 | L101                         | INDUCTOR, 4.7µH, 13.5A (6.5mm x 6.7mm)                                                                    |          1 | COILCRAFT XGL6060-472ME    |
|     12 | L201                         | INDUCTOR, 6.8µH, 11.5A (6.5mm x 6.7mm)                                                                    |          1 | COILCRAFT XGL6060-682ME    |
|     13 | R101, R201                   | 3.32MΩ, ±1%, 0.1W, Resistor (0603)                                                                        |          2 | VISHAY DALE CRCW06033M32FK |
|     14 | R102                         | 1.3MΩ, ±1%, 0.1W, Resistor (0603)                                                                         |          1 | PANASONIC ERJ-3EKF1304     |
|     15 | R103, R203                   | 40.2kΩ, ±1%, 0.063W, Resistor (0402)                                                                      |          2 | VISHAY DALE CRCW040240K2FK |
|     16 | R105, R205                   | 10kΩ, ±1%, 0.1W, Resistor (0402)                                                                          |          2 | PANASONIC ERJ-2RKF1002     |
|     17 | R106                         | 84.5kΩ, ±1%, 0.063W, Resistor (0402)                                                                      |          1 | VISHAY DALE CRCW040284K5FK |
|     18 | R107                         | 31.6kΩ, ±1%, 0.063W, Resistor (0402)                                                                      |          1 | VISHAY DALE CRCW040231K6FK |
|     19 | R108                         | 0Ω, Jumper, 0.1W, Resistor (0402)                                                                         |          1 | PANASONIC ERJ-2GE0R00      |
|     20 | R202                         | 806kΩ, ±1%, 0.1W, Resistor (0603)                                                                         |          1 | PANASONIC ERJ-3EKF8063     |
|     21 | R204                         | 4.7Ω, ±1%, 0.063W, Resistor (0402)                                                                        |          1 | VISHAY DALE CRCW04024R70FK |
|     22 | R206                         | 127kΩ, ±1%, 0.1W, Resistor (0402)                                                                         |          1 | PANASONIC ERJ-2RKF1273     |
|     23 | R207                         | 28kΩ, ±1%, 0.063W, Resistor (0402)                                                                        |          1 | VISHAY DALE CRCW040228K0FK |
|     24 | JU101, JU102, JU201, JU202   | 3-pin header (36-pin header 0.1' centers )                                                                |          4 | SULLINS PEC03SAAN          |
|     25 | SU101, SU102, SU201, SU202   | Shunts                                                                                                    |          4 | SULLINS STC02SYAN          |
|     26 | MH1-MH4                      | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                 |          4 | KEYSTONE 9032              |
|     27 | U101, U201                   | HIGH-EFFICIENCY SYNCHRONOUS STEP-DOWN DC-DC CONVERTER WITH INTERNAL COMPENSATION (24-PIN TQFN, 4mm x 5mm) |          2 | MAX17573ATG+               |
|     28 | C203, C210                   | OPTIONAL: 4.7μF ±10%, 100V, X7R, Ceramic capacitor (1206)                                                 |          2 | MURATA GRM31CZ72A475KE11   |
|     29 | L202                         | OPTIONAL: Inductor, 15μH, 3.6A (4mm x 4mm)                                                                |          1 | COILCRAFT XGL4040-153ME    |
|     30 | L102                         | OPEN: Inductor (4mm x 4mm)                                                                                |          0 |                            |
|     31 | R104                         | OPEN: Resistor (0402)                                                                                     |          0 |                            |
|     32 | C103, C110                   | OPEN: Capacitor (1206)                                                                                    |          0 |                            |

## Evaluates: MAX17573 in 5V and 3.3V OutputVoltage Applications MAX17573 Evaluation Kit

|   33 | C116, C117, C124, C217, C224   | OPEN: Capacitor (0402)   |   0 |   C216, |
|------|--------------------------------|--------------------------|-----|---------|
|      | C122, C222                     | OPEN: Capacitor (0805)   |   0 |      34 |
|   35 | C123, C223                     | OPEN: Capacitor (0603)   |   0 |         |

## Components Supplier

| SUPPLIER                  | WEBSITE             |
|---------------------------|---------------------|
| Coilcraft                 | www.coilcraft.com   |
| Murata Americas           | www.murata.com      |
| Panasonic Corp            | www.panasonic.com   |
| Vishay Dale               | www.vishay.com      |
| Sullins Corp              | www.sullinscorp.com |
| Keystone Electronics Corp | www.keyelco.com     |

Note:

Indicate using the MAX17573 when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17573EVKITA# | EV Kit |
| MAX17573EVKITB# | EV Kit |

#Denotes RoHS-compliant.

## Evaluates: MAX17573 in 5V and 3.3V OutputVoltage Applications MAX17573 Evaluation Kit

## MAX17573EVKITA# and MAX17573EVKITB# EV Kit Schematics

Figure 1. 3.3V Application Circuit Schematic Diagram

<!-- image -->

## Evaluates: MAX17573 in 5V and 3.3V OutputVoltage Applications MAX17573 Evaluation Kit

## MAX17573EVKITA# and MAX17573EVKITB# EV Kit Schematics (continued)

Figure 2. 5V Application Circuit Schematic Diagram

<!-- image -->

## Evaluates: MAX17573 in 5V and 3.3V OutputVoltage Applications

## MAX17573 EV Kit PCB Layout

MAX17573 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX17573 EV Kit PCB Layout-Top

<!-- image -->

## Evaluates: MAX17573 in 5V and 3.3V OutputVoltage Applications

## MAX17573 EV Kit PCB Layout (continued)

MAX17573 EV Kit PCB Layout-Layer 2

<!-- image -->

MAX17573 EV Kit PCB Layout-Layer 3

<!-- image -->

## Evaluates: MAX17573 in 5V and 3.3V OutputVoltage Applications

## MAX17573 EV Kit PCB Layout (continued)

MAX17573 EV Kit PCB Layout-Bottom

<!-- image -->

MAX17573 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

## Evaluates: MAX17573 in 5V and 3.3V OutputVoltage Applications

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/22            | Initial release | -               |

<!-- image -->

## MAX17573 Evaluation Kit