<!-- lastmod 2022-08-02 -->
## MAX17521EVKITE# Evaluation Kit

## General Description

The MAX17521EVKITE# evaluation kit (EV kit) provides a proven design to evaluate the MAX17521 high-efficiency, high-voltage,  Himalaya  synchronous  step-down  dual DC-DC converter. The EV kit is preset to generate 5V and 3.3V output voltages, at load currents up to 1A per converter. The switching frequency of the EV kit is preset to 560kHz for optimum efficiency and component size. The EV kit features programmable enable and input undervoltage  lockout  (EN/UVLO),  programmable  soft-start  (SS), open-drain  status  ( RESET )  output  and  external  clock synchronization (SYNC). The EV kit also provides good layout example, which is optimized for conducted, radiated EMI, and thermal performance. For more details about the IC Benefits and Features , refer to the MAX17521 IC data sheet.

## Features

- Operates from a 7V to 60V Input Supply
- Dual-Output Voltage: 5V and 3.3V
- Up to 1A Output Current per Converter
- 560kHz Switching Frequency
- EN/UVLO Input, Resistor-Programmable UVLO Threshold
- Mode Selection Jumper to Select Between PWM and PFM Modes
- Capacitor Programmable Soft-Start Time
- External Clock Synchronization Input
- Open-Drain RESET Output
- Overcurrent Protection
- Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested
- Complies with CISPR32(EN55032) Class B Conducted and Radiated Emissions

Evaluates: MAX17521 in 5V and 3.3V Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX17521EVKITE#
- 60V, 2A DC input power supply
- Two loads capable of sinking 1A
- Four digital voltmeters (DVM)

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Use the following steps to verify board operation:

## Caution: Do not turn on power supply until all connections are completed.

- 1) Set the power supply at a voltage between 7V and 60V. Disable the power supply.
- 2) Connect the positive terminal of the power supply to the VIN1 PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of one of the 1A load to the VOUT1 PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of another 1A load to the VOUT2 PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3) Connect two DVMs across the VOUT1 PCB pad and the nearest PGND PCB pad, VOUT2 PCB pad, and the nearest PGND PCB pad.
- 4) Verify that shunts are not installed across pins on jumpers JU1 and JU2. (See Table 1 and Table 2 for details).
- 5) Select the shunt position on jumpers JU3 and JU4 according to the intended mode of operation. (See Table 3 and Table 4 for details).
- 6) Turn on the DC power supply.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX17521EVKITE# Evaluation Kit

- 7) Enable the loads.
- 8) Ensure the input voltage to be above 6.6V which is the EN rising threshold.
- 9) Verify that the DVMs display 5V and 3.3V.
- 10)  Connect the other two DVMs across RESET1 pad and SGND, RESET2 pad and SGND. Verify that the DVMs display 5V.
- 11)  Reduce the input voltage to 5V which is below the EN/UVLO falling threshold.
- 12)  Verify that the DVMs across the VOUT1 pad and nearest PGND, VOUT2 pad and nearest PGND display 0V.
- 13)  Verify that the DVMs across the RESET1 pad and nearest SGND, RESET2 pad and nearest SGND display 0V.
- 14)  Disable the input.

## Detailed Description

The  MAX17521EVKITE#  provides  a  proven  design  to evaluate  the  MAX17521  high-efficiency,  high-voltage, Himalaya synchronous step-down Dual DC-DC converter. The EV kit generates 5V and 3.3V outputs, at load currents  up  to  1A  per  converter,  from  a  7V  to  60V  input supply. The EV kit features a 560kHz fixed switching frequency for optimum efficiency and component size.

## Evaluates: MAX17521 in 5V and 3.3V Output-Voltage Application

## Enable/Undervoltage Lockout (EN/UVLO) Programming

The  MAX17521  offers  an  adjustable  enable  and  input undervoltage lockout level for each converter. In this EV kit, for the normal operation of the converters, leave EN/ UVLO jumpers, JU1 and JU2 (for the converter 1 and converter 2, respectively) in the open position. When JU1 and JU2 are left open, the MAX17521 converters are enabled when the input voltage rises above 6.6V. To disable the converter 1 and converter 2, install a jumper across pins 2-3 on JU1 and JU2, appropriately. See Table 1 and Table 2 for jumper settings. The EN/UVLO1 and EN/UVLO2 PCB pads on the EV Kit support external enable/disable control  of  the  converters.    Leave  JU1  and  JU2  open  when external enable/disable control is desired. Set the voltage at which the converter turns on with a resistive voltagedivider  connected  from  the  respective  input  (VIN1  and VIN2) to ground (SGND).

Choose R TOP to be 3.3MΩ max, and then calculate R BOT as follows:

<!-- formula-not-decoded -->

Where,

The EV kit includes an EN/UVLO PCB pads and jumpers JU1,  JU2  to  enable  the  two  outputs  at  a  desired  input voltage. The SYNC PCB pad and jumper JU5 allow an external clock to synchronize the converters. The EV kit features mode selection jumper, programmable soft-start time, open-drain RESET output for each converter.

VINU  is the voltage at which the converter is required to turn on.

RTOP and R BOT are in kΩ,

For more details about Setting the Enable and Undervoltage Lockout Level ,  refer  to  the  MAX17521  IC data sheet.

Table 1. Converter 1 EN/UVLO1 Jumper (JU1) Settings

| SHUNT POSITION   | EN/UVLO1 PIN                                               | MAX17521 CONVERTER 1                                    |
|------------------|------------------------------------------------------------|---------------------------------------------------------|
| Not Installed*   | Connected to the center node of resistor divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistors |
| 1-2              | Connected to VIN1                                          | Enabled                                                 |
| 2-3              | Connected to SGND                                          | Disabled                                                |

*Default position

Table 2. Converter 2 EN/UVLO2 Jumper (JU2) Settings

| SHUNT POSITION   | EN/UVLO2 PIN                                                | MAX17521 CONVERTER 2                                     |
|------------------|-------------------------------------------------------------|----------------------------------------------------------|
| Not Installed*   | Connected to the center node of resistor divider R9 and R10 | Enabled, UVLO level set through the R9 and R10 resistors |
| 1-2              | Connected to VIN2                                           | Enabled                                                  |
| 2-3              | Connected to SGND                                           | Disabled                                                 |

*Default position

│

## MAX17521EVKITE# Evaluation Kit

## Soft-Start Input (SS)

The  EV  kit  offers  programmable  soft-start  function  for each  converter  to  limit  inrush  current  during  startup. Capacitors connected from the SS pins (C SS ) to SGND program the soft-start time for the corresponding output voltages. The selected output capacitance (C SEL ) and the output  voltage  (V OUT )  determine  the  minimum  required soft-start capacitor as follows:

<!-- formula-not-decoded -->

The soft-start time (t SS ) is related to the capacitor (C SS ) connected at SS pin by the following equation:

<!-- formula-not-decoded -->

For example, to program a 1ms soft-start time, a 5.6nF capacitor should be connected from the SS pin to SGND.

## Evaluates: MAX17521 in 5V and 3.3V Output-Voltage Application

## Mode Selection (MODE1, MODE2)

The EV kit provide jumpers (JU3 and JU4, for the converter  1  and  converter  2,  respectively)  that  allow  the MAX17521  converters  to  operate  in  PWM  and  PFM modes.    Refer  to  the  MAX17521  data  sheet  for  more details on the Mode of Operation Selection . Table 3 and Table 4 shows the mode selection (JU3 and JU4) settings that can be used to configure the desired mode of operation for each converter.

## External Clock Synchronization (SYNC)

The EV kit provides SYNC PCB pad to synchronize the MAX17521  converters  to  an  optional  external  clock. Leave  Jumper  JU5  (See  Table  5)  open  when  external clock signal is applied. In the presence of a valid external clock for synchronization, the MAX17521 converters operate in PWM mode only. For more details about the External  Clock  Synchronization ,  refer  to  the  MAX17521 IC data sheet.

## Table 3. Converter 1 MODE1 Jumper (JU3) Settings

| SHUNT POSITION   | MODE1 PIN         | MAX17521 CONVERTER 1 MODE   |
|------------------|-------------------|-----------------------------|
| 1-2              | Connected to SGND | PWM                         |
| Not installed*   | Unconnected       | PFM                         |

*Default position

## Table 4. Converter 2 MODE2 Jumper (JU4) Settings

| SHUNT POSITION   | MODE2 PIN         | MAX17521 CONVERTER 2 MODE   |
|------------------|-------------------|-----------------------------|
| 1-2              | Connected to SGND | PWM                         |
| Not installed*   | Unconnected       | PFM                         |

*Default position

## Table 5. External Clock Synchronization Jumper (JU5) Settings

| SHUNT POSITION   | SYNC PIN                      | MAX17521 CONVERTERS                                  |
|------------------|-------------------------------|------------------------------------------------------|
| 1-2              | Connected to test loop on PCB | Frequency can be synchronized with an external clock |
| 2-3*             | Connected to SGND             | SYNC feature unused                                  |

*Default position

│

## MAX17521EVKITE# Evaluation Kit

## Active-Low, Open-Drain Reset Output ( RESET1 and RESET2 )

The  EV  kit  provides RESET1 and RESET2 PCB  pads to  monitor  the  status  of  the  converters. RESET1 and RESET2 goes  high  respectively  after  1024  switching cycles, when VOUT1 and VOUT2 rise above 95.5% (typ) of their nominal regulated voltage. RESET1 and RESET2 goes  low  when  VOUT1  and  VOUT2  falls  below  92.5% (typ) of their nominal regulated voltage.

## Converter 2 Input Supply (VIN2) Connection

By default, the converter 2 input supply is derived from the  converter  1  input  supply,  through  a  jumper  resistor connection  RIN1.  The  MAX17521EVKITE#  PCB  layout has also the provision at VIN2 PCB pad, to power up the converter 2 through a second supply by removing RIN1 and placing a jumper resistor on RIN2. Table 6 shows the converter 2 input supply connection settings.

## Hot Plug-In and Long Input Cables

The MAX17521EVKITE# PCB layout provides an optional electrolytic capacitor (C8 = 22μF/100V). In the default EV kit  configuration  (RIN2  in  open  position),  this  capacitor

## Evaluates: MAX17521 in 5V and 3.3V Output-Voltage Application

limits  the  peak  voltage  at  the  inputs  of  the  MAX17521 converters when the DC input source is Hot-plugged to the EV kit input terminals with input cables. The equivalent  series  resistance (ESR) of the electrolytic capacitor dampens  the  oscillations  caused  by  interaction  of  the inductance  of  the  long  input  cables,  and  the  ceramic capacitors at the buck converter input.

## Electromagnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter.  The  EMI  filter  attenuates  high-frequency  currents drawn by the switching power converter, and limits the noise injected back into the input power source.

The MAX17521EVKITE# PCB has designated footprints on  the  EV  kit  for  placement  of  EMI  filter  components. Use  of  these  filter  components  results  in  lower  conducted  EMI,  below  CISPR32  Class  B  limits.  Cut  open the  trace  at  L3  before  installing  EMI  filter  components. The  MAX17521EVKITE#  PCB  layout  is  also  designed to  limit  radiated  emissions  from  switching  nodes  of  the power converters, resulting in radiated emissions below CISPR32 Class B limits.

## Table 6. Converter 2 Input (VIN2) Connection Settings

| RIN1 CONNECTION   | RIN2 CONNECTION   | CONVERTER 2 INPUT (VIN2) CONNECTION        |
|-------------------|-------------------|--------------------------------------------|
| Jumper Resistor*  | Open*             | Derived from VIN1                          |
| Open              | Jumper Resistor   | Through a supply connected at VIN2 PCB Pad |

*Default position

│

## MAX17521EVKITE# Performance Report

(VIN1 = VIN2 =24V, RIN1 = 0Ω, f SW = 560kHz, TA = +25°C, unless otherwise noted).

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

│

## MAX17521EVKITE# Performance Report (continued)

(VIN1 = VIN2 =24V, RIN1 = 0Ω, f SW = 560kHz, TA = +25°C, unless otherwise noted).

<!-- image -->

<!-- image -->

CONDITIONS: 5V OUTPUT, PWM MODE, 1A LOAD

<!-- image -->

<!-- image -->

<!-- image -->

CONDITIONS: 5V OUTPUT, PWM MODE, NO-LOAD

<!-- image -->

CONDITIONS: 3.3V OUTPUT, PWM MODE, 1A LOAD

│

## MAX17521EVKITE# Performance Report (continued)

(VIN1 = VIN2 =24V, RIN1 = 0Ω, f SW = 560kHz, TA = +25°C, unless otherwise noted).

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

│

## MAX17521EVKITE# Performance Report (continued)

(VIN1 = VIN2 =24V, RIN1 = 0Ω, f SW = 560kHz, TA = +25°C, unless otherwise noted).

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

│

## MAX17521EVKITE# Performance Report (continued)

(VIN1 = VIN2 =24V, RIN1 = 0Ω, f SW = 560kHz, TA = +25°C, unless otherwise noted).

<!-- image -->

CONDITIONS: 5V OUTPUT, PWM MODE, LOAD = 5Ω

<!-- image -->

CONDITIONS: L3 = 15µH, C5 = C6 = 4.7µF/100V/X7R/1210

<!-- image -->

70.0

60.0

Frequency (Hz)

CONDITIONS: 3.3V OUTPUT, PWM MODE, LOAD = 3.3Ω

<!-- image -->

RE 30MHz-1GHz\_0-360deg\_90deg step\_1-4mtr height\_Quick Scan\_Test5.TIL

11:07:35 PM, Thursday, August 08, 2019

│

## MAX17521EVKITE# Evaluation Kit

## Component Suppliers

| SUPPLIER        | WEBSITE                |
|-----------------|------------------------|
| Coilcraft, Inc. | www.coilcraft.com      |
| MurataAmericas  | www.murataamericas.com |
| Panasonic Corp. | www.panasonic.com      |
| SullinsCorp     | www.sullinscorp.com    |
| TDK             | www.tdk.com            |

Note: Indicate that you are using the MAX17521 when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17521EVKITE# | EV Kit |

#Denotes RoHs compliance.

Evaluates: MAX17521 in 5V and

3.3V Output-Voltage Application

│

## MAX17521EVKITE# Bill of Materials

|   S. No | DESIGNATOR       | DESCRIPTION                                                                    |   QUANTITY | MANUFACTURER PART NUMBER    |
|---------|------------------|--------------------------------------------------------------------------------|------------|-----------------------------|
|       1 | C1, C11, C24     | 0.1µF, 10%, 100V, X7R, Ceramic capacitor (0603)                                |          3 | MURATA GRM188R72A104KA35    |
|       2 | C2               | 220pF, 5%, 100V, COG, Ceramic capacitor (0603)                                 |          1 | TDK C1608C0G2A221J080AA     |
|       3 | C8               | 22uF, 20%, 100V, Electrolytic capacitor                                        |          1 | PANASONIC EEE-TG2A220UP     |
|       4 | C10, C25         | 4.7µF, 10%, 100V, X7R, Ceramic capacitor (1206)                                |          2 | MURATA GRM31CZ72A475KE11    |
|       5 | C12, C23         | 0.1µF, 10%, 16V, X7R, Ceramic capacitor (0402)                                 |          2 | MURATA GRM155R71C104KA88    |
|       6 | C15, C20         | 22µF, 20%, 25V, X7R, Ceramic capacitor (1210)                                  |          2 | MURATA GRM32ER71E226ME15    |
|       7 | C16, C27         | 1µF, 10%, 16V, X7R, Ceramic capacitor (0603)                                   |          2 | MURATA GRM188R71C105KA12    |
|       8 | C17, C26         | 3300pF, 2%, 50V, COG, Ceramic capacitor (0402)                                 |          2 | MURATA GRM1555C1H332GE01    |
|       9 | C18              | 15pF, 5%, 50V, COG, Ceramic capacitor (0402)                                   |          1 | MURATA GRM1555C1H150JA01    |
|      10 | C19, C28         | 2700pF, 2%, 50V, COG, Ceramic capacitor (0402)                                 |          2 | MURATA GRM1555C1H272GE01    |
|      11 | C29              | 22pF, 5%, 50V, COG, Ceramic capacitor (0402)                                   |          1 | MURATA GRM1555C1H220JA01    |
|      12 | L1               | Inductor, 22µH, 3.6A (5.3mm x 5.5mm)                                           |          1 | COILCRAFT XAL5050-223ME     |
|      13 | L2               | Inductor, 15µH, 2.8A (4mm x 4mm)                                               |          1 | COILCRAFT XAL4040-153ME     |
|      14 | R1, R9           | 3.3MΩ, 1%, 1/10W, Resistor (0603)                                              |          2 |                             |
|      15 | R2, R10          | 750kΩ, 1%, 1/10W, Resistor (0603)                                              |          2 |                             |
|      16 | R3               | 82.5K Ω, 1%, 1/16W, Resistor (0402)                                            |          1 |                             |
|      17 | R4               | 18.2K Ω, 1%, 1/16W, Resistor (0402)                                            |          1 |                             |
|      18 | R5               | 23.7K Ω, 1%, 1/16W, Resistor (0402)                                            |          1 |                             |
|      19 | R6, R7           | 10K Ω, 1%, 1/16W, Resistor (0402)                                              |          2 |                             |
|      20 | R8               | 16.9K Ω, 1%, 1/16W, Resistor (0402)                                            |          1 |                             |
|      21 | R11              | 54.9K Ω, 1%, 1/16W, Resistor (0402)                                            |          1 |                             |
|      22 | R12              | 20.5K Ω, 1%, 1/16W, Resistor (0402)                                            |          1 |                             |
|      23 | RIN1             | 0Ω, ±5%, 1/2W, Resistor (0805)                                                 |          1 |                             |
|      24 | U1               | High-Efficiency Synchronous Step-Down Dual DC-DC Converter (TQFN24-EP 4mmx5mm) |          1 | MAX17521ATG+                |
|      25 | JU1, JU2, JU5    | 3-pin header (36-pin header 0.1' centers )                                     |          3 | Sullins PEC03SAAN           |
|      26 | JU3, JU4         | 2-pin header (36-pin header 0.1' centers )                                     |          2 | Sullins PEC02SAAN           |
|      27 | C5, C7           | OPTIONAL: 4.7μF, 10%, 100V, X7R, Ceramic capacitor (1206)                      |          2 | MURATA GRM31CZ72A475KE11    |
|      28 | L3               | OPTIONAL: INDUCTOR, 10µH, 1A (2.8mm x 2.8mm)                                   |          1 | WURTH ELECTRONICS 744025100 |
|      29 | C3, C9, C13, C22 | OPEN: Capacitor (0603)                                                         |          0 |                             |
|      30 | C4, C14, C21     | OPEN: Capacitor (0402)                                                         |          0 |                             |
|      31 | C6               | OPEN: Capacitor (1206)                                                         |          0 |                             |
|      32 | R13              | OPEN: Resistor (0603)                                                          |          0 |                             |
|      33 | RIN2             | OPEN: Resistor (0805)                                                          |          0 |                             |

| DEFAULT JUMPER TABLE   | DEFAULT JUMPER TABLE   |
|------------------------|------------------------|
| JUMPER                 | SHUNT POSITION         |
| JU1, JU2               | Not Installed          |
| JU3, JU4               | Not Installed          |
| JU5                    | 2-3                    |

## MAX17521EVKITE# Schematic

<!-- image -->

## MAX17521EVKITE# Evaluation Kit

## MAX17521EVKITE# PCB Layouts

MAX17521EVKITE# Component Placement Guide-Top Silkscreen

<!-- image -->

MAX17521EVKITE# PCB Layout-Top Layer

<!-- image -->

MAX17521EVKITE# PCB Layout-Layer 2

<!-- image -->

MAX17521EVKITE# PCB Layout-Layer 3

<!-- image -->

│

## MAX17521EVKITE# PCB Layouts (continued)

MAX17521EVKITE# PCB Layout-Bottom Layer

<!-- image -->

MAX17521EVKITE# Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

Evaluates: MAX17521 in 5V and

3.3V Output-Voltage Application

## MAX17521EVKITE# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim InteJrated reVerYeV the riJht to chanJe the circuitry and Vpeci¿cationV Zithout notice at any time.

│

Evaluates: MAX17521 in 5V and

3.3V Output-Voltage Application