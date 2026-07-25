<!-- lastmod 2022-08-02 -->
## MAX17557EVKITE# Evaluation Kit

## General Description

The MAX17557EVKITE# evaluation kit (EV kit) provides a proven design to evaluate the MAX17557 high-efficiency, high-voltage,  Himalaya  synchronous  step-down  DC-DC controller. The EV kit is preset to generate 5V output at load  currents  up  to  10A  from  a  6.5V  to  48V  input  supply.  The  EV  kit  features  a  350kHz  switching  frequency for  optimum  efficiency  and  component  size.  The  EV  kit features PCB pads for enable/disable functionality, opendrain  power-good  (PGOOD)  output,  and  external  clock synchronization (MODE/SYNC). The EV kit also provides a good layout example, which is optimized for conducted, radiated EMI, and thermal performance. For more details about the device, refer to the MAX17557 IC data sheet's Benefits and Features section.

## Features

- Operates from a 6.5V to 48V Input Supply
- 5V Output Voltage
- Up to 10A Output Current
- 350kHz Switching Frequency
- Enable/Disable Input, Resistor-Programmable UVLO Threshold
- MODE Selection Jumper to Select Between PWM and DCM Modes
- Capacitor Programmable Soft-Start Time
- External Clock Synchronization Input
- Jumper Programmable Soft-Stop Enable or Disable Functionality
- Open-Drain PGOOD Output
- Overcurrent Protection Mode Selection Jumper
- Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested
- Complies with CISPR32(EN55032) Class B Conducted and Radiated Emissions

Evaluates: MAX17557 in 5V

Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX17557EVKITE#
- 60V, 10A DC input power supply
- Load capable of sinking 10A
- Two digital voltmeters (DVM)

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Use the following steps to verify board operation:

## Caution: Do not turn on power supply until all connections are completed.

- 1) Set the power supply at a voltage between 6.5V and 48V. Disable the power supply.
- 2) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the 10A load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3) Connect one DVM across the VOUT PCB pad and the nearest PGND PCB pad, and other DVM across PGOOD PCB pad and SGND PCB pad.
- 4) Verify that shunts are installed across pins 1-2 on jumper JU3 (See Table 1 for details).
- 5) Select the shunt positions on the jumpers JU1, JU2 and JU4 according to the intended mode of operation. (See Table 2, Table 3, and Table 4 for details).

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX17557EVKITE# Evaluation Kit

- 6) Turn on the DC power supply.
- 7) Enable the load.
- 8) Ensure that the input voltage to be 6.5V or higher, with which the EN pin voltage is more than the EN rising threshold.
- 9) Verify that the DVM across the VOUT PCB pad and the nearest PGND PCB pad display 5V.
- 10)  Verify that the DVM across the PGOOD PCB pad and the nearest SGND PCB pad display 5V.
- 11)  Reduce the input voltage to 5V, which is below the EN falling threshold.
- 12)  Verify that both the DVMs display 0V.
- 13)  Disable the input power supply.

## Detailed Description

The  MAX17557EVKITE#  provides  a  proven  design  to evaluate  the  MAX17557  high-efficiency,  high-voltage, Himalaya synchronous step-down DC-DC controller. The EV  kit  generates  5V  output  at  load  currents  up  to  10A from a 6.5V to 48V input supply. The EV kit features a 350kHz switching  frequency  for  optimum  efficiency  and component size. The EV kit enables using external current sense resistor, inductor DCR current sense methods. The  MODE/SYNC  PCB  pad  allows  an  external  clock to  synchronize  the  device.  The  EV  kit  features  jumpers for selecting mode of operation (JU1), mode of overcurrent  protection  (JU2),  enable/disable  the  converter  output  (JU3),  and  enable/disable  the  soft-stop  functionality (JU4). A PGOOD PCB pad is available for monitoring the status of converter output voltage regulation.

Table 1. Converter EN Jumper (JU3) Settings

| JUMPER   | SHUNT POSITION   | EN PIN            | MAX17557 OUTPUT   |
|----------|------------------|-------------------|-------------------|
| JU3      | Not installed    | Floating          | Always ON         |
| JU3      | 2-3              | Connected to SGND | Disabled          |

*Default position.

Table 2. Mode Selection Jumper (JU1) Settings

| JUMPER   | SHUNT POSITION   | MODE/SYNC PIN       | MAX17557 MODE OF OPERATION   |
|----------|------------------|---------------------|------------------------------|
| JU1      | 1-2              | Connected to VCCINT | DCM                          |
| JU1      | 2-3*             | Connected to SGND   | PWM                          |

*Default position.

## Evaluates: MAX17557 in 5V Output-Voltage Application

## Enable/Undervoltage Lockout (EN) Programming

The  MAX17557  offers  an  adjustable  enable  and  input undervoltage  lockout  feature.  In  this  EV  kit,  for  normal operation, install a shunt across pins 1-2 on EN jumper (JU3).  When  the  shunt  is  installed,  the  MAX17557  is enabled  when  the  input  voltage  rises  above  6.45V.  To disable the device, install shunt across pins 2-3 on the jumper JU3. The EV kit can handle input voltage up to 60V when the device is disabled. See Table 1 for jumper JU3 settings. The  EN  PCB  pad  on  the  EV  kit  supports external enable/disable control of the device. Leave the jumper  open  when  external  enable/disable  control  is desired.  A  potential  divider  formed  by  the  resistors  R5 and R6 at the EN pin sets the input voltage (V INU ) above which the converter is enabled when a shunt is installed across pins 1-2.

Select R5 to be 50kΩ and calculate R6 based on the fol -lowing equation:

<!-- formula-not-decoded -->

where  R5  and  R6  are  in  Ω.  For  more  details,  see  the Setting  the  Undervoltage  Lockout  Level section  in  the MAX17557 IC data sheet.

## Mode Selection (MODE/SYNC)

The  EV  kit  provides  a  jumper  (JU1)  that  allows  the MAX17557 to operate in PWM and DCM modes. Refer to the Modes of Operation section in the MAX17557 IC data sheet for more details. Table 2 shows the mode selection jumper (JU2) settings that can be used to configure the desired mode of operation.

│

## MAX17557EVKITE# Evaluation Kit

## External Clock Synchronization (MODE/SYNC)

The EV kit provides a MODE/SYNC PCB pad to synchronize the MAX17557 to an optional external clock. Leave jumper JU1 open when external clock signals are applied. In the presence of a valid external clock for synchronization,  the  MAX17557  operates  in  PWM  mode  only.  For more details, refer to the External Clock Synchronization section in the MAX17557 IC data sheet.

## Overcurrent Protection (ILIMSEL) Selection

The  EV  kit  provides  a  jumper  JU2  to  select  the  mode of overcurrent protection (See  Table  3).  For  more details, refer to the Overcurrent Protection section in the MAX17557 IC data sheet.

## Soft-Start Input (SS)

The EV kit offers an adjustable soft-start function to limit inrush current during startup. The soft-start time is adjusted by the value of external soft-start capacitor (C18) connected between SS and SGND. An internal 5µA current source charges the capacitor (C18) at the SS pin providing a linear ramping voltage for output-voltage reference.

The soft-start time (t SS ) is related to the capacitor (C SS ) connected at SS pin by the following equation:

<!-- formula-not-decoded -->

## Table 3. Overcurrent Protection Jumper (JU2) Settings

| JUMPER   | SHUNT POSITION   | MODE/SYNC PIN       | MODE OF MAX17557 OVERCURRENT PROTECTION   |
|----------|------------------|---------------------|-------------------------------------------|
| JU2      | 1-2              | Connected to VCCINT | Latch-off mode                            |
| JU2      | 2-3*             | Connected to SGND   | Foldback mode                             |

## Table 4. Soft-Stop Jumper (JU4) Settings

| JUMPER   | SHUNT POSITION   | SSTPE PIN           | MAX17557 SOFT-STOP FUNCTIONALITY   |
|----------|------------------|---------------------|------------------------------------|
| JU4      | 1-2              | Connected to VCCINT | Enabled                            |
| JU4      | 2-3*             | Connected to SGND   | Disabled                           |

*Default position.

## Evaluates: MAX17557 in 5V Output-Voltage Application

For example, to program a 5.3ms soft-start time, a 33nF capacitor is connected from the SS pin to SGND.

## Soft-Stop Enable (SSTPE):

The EV kit provides a jumper JU4 to enable or disable the soft-stop functionality during device's power down using the EN pin (See Table 4). Soft-stop time is equal to softstart time. For more details, refer to the Soft-Stop Enable section in the MAX17557 IC data sheet.

## Active-Low, Open-Drain Power Good Output (PGOOD)

The EV kit provides a PGOOD PCB pad to monitor the status  of  the  converter.  PGOOD  goes  high  20µs  after VOUT rises above 92.5% (typ) of its nominal regulated output voltage and PGOOD goes low 10µs after VOUT falls  below  90%  (typ)  of  its  nominal  regulated  voltage. Also,  PGOOD  goes  low  20µs  after  VOUT  rises  above 110%  (typ)  of  its  nominal  regulated  output  voltage  and PGOOD goes high 10µs after VOUT falls below 107.5% (typ) of its nominal regulated voltage.

│

## MAX17557EVKITE# Evaluation Kit

## Current-Sensing (CSP and CSN)

By  default,  the  MAX17557EVKITE#  enables  currentsense  by  using  an  external  sense  resistor  (R8  =  5mΩ) along with jumper resistors (R12, R13). The EV kit has also provisions to enable current-sense through inductor DCR by removing jumper resistors at R12, R13, and placing them at R10, R11; by placing proper values at R14, R16, and C26; by shorting R8 with a jumper resistor. It is  recommended to select C26 in the range of 0.1µF to 0.47µF. Calculate R14 (if R16 is not used) based on following equation:

<!-- formula-not-decoded -->

R16  is  used  in  applications  where  DCR  of  inductor  is greater than the desired current-sense resistance. In this case,  calculate  R14  and  R16  using  the  following  equations:

<!-- formula-not-decoded -->

where L is the selected inductance in H and R SENSE  is the desired current-sense resistance in Ω.

RSENSE is chosen to be 5mΩ for the circuit in this EV kit. For more details, refer to the Current Sensing section in the MAX17557 IC data sheet.

## Evaluates: MAX17557 in 5V Output-Voltage Application

## Hot Plug-In and Long Input Cables

The MAX17557EVKITE# PCB layout provides an optional electrolytic  capacitor  (C11  =  150μF/80V).  This  capaci -tor limits the peak voltage at the input of the MAX17557 when the DC input source is hot-plugged into the EV kit input  terminals  with  input  cables.  The  equivalent  series resistance  (ESR)  of  the  electrolytic  capacitor  dampens the  oscillations  caused  by  interaction  of  the  inductance of  the  input  cables,  and  the  ceramic  capacitors  at  the converters input.

## Electromagnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter.  The  EMI  filter  attenuates  high-frequency  currents drawn by the switching power converter and limits the noise injected back into the input power source.

The MAX17557EVKITE# PCB has designated footprints on the EV kit for the placement of EMI filter components. Use of these filter components results in lower conducted emissions below CISPR32 Class B limits. Cut open the trace  at  L2  before  installing  conducted  EMI  filter  components.  The  MAX17557EVKITE#  PCB  layout  is  also designed to limit radiated emissions from switching nodes of  the  power  converter,  resulting  in  radiated  emissions below CISPR32 Class B limits.

## MAX17557EVKITE# Evaluation Kit

## MAX17557EVKITE# Performance Report

(VIN = 24V, fSW = 350kHz, TA = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

Evaluates: MAX17557 in 5V

Output-Voltage Application

<!-- image -->

<!-- image -->

<!-- image -->

│

## MAX17557EVKITE# Performance Report (continued)

(VIN = 24V, fSW = 350kHz, TA = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

Evaluates: MAX17557 in 5V

│

## MAX17557EVKITE# Performance Report (continued)

(VIN = 24V, fSW = 350kHz, TA = +25°C, unless otherwise noted.)

<!-- image -->

Maxim IC\_MAX17557V1

70.0

<!-- image -->

60.0

CONDITIONS: L2 = SHORT, C5 = C6 = C9 = C10 = OPEN

<!-- image -->

<!-- image -->

CONDITIONS: L2 = 33µH, C5 = C6 = C9 = C10 = 4.7µF/100V/X7R/1206

<!-- image -->

RE 30MHz-1GHz\_0-360deg\_90deg step\_1-4mtr height\_Quick Scan\_Test7.TIL

12:04:24 AM, Friday, August 09, 2019

Limit

Evaluates: MAX17557 in 5V

│

## MAX17557EVKITE# Evaluation Kit

## Component Suppliers

| SUPPLIER            | WEBSITE                |
|---------------------|------------------------|
| Coilcraft, Inc.     | www.coilcraft.com      |
| Murata Americas     | www.murataamericas.com |
| Panasonic Corp.     | www.panasonic.com      |
| Renesas Electronics | www.renesas.com        |
| Diodes Inc.         | www.diodes.com         |
| Yageo Corp.         | www.yageo.com          |
| TDK                 | www.tdk.com            |
| Taiyo Yuden         | www.ty-top.com         |
| Comchip             | www.comchiptech.com    |
| SullinsCorp         | www.sullinscorp.com    |

Note:

Indicate that you are using the MAX17557 when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17557EVKITE# | EV Kit |

#Denotes RoHS compliance.

Evaluates: MAX17557 in 5V

Output-Voltage Application

## MAX17557EVKITE# Bill of Materials

|   S. No | DESIGNATOR               | DESCRIPTION                                               |   QUALITY | MANUFACTURER PART NUMBER       |
|---------|--------------------------|-----------------------------------------------------------|-----------|--------------------------------|
|       1 | C3, C14, C17             | 0.1µF, 10%, 100V, X7R, Ceramic capacitor (0603)           |         3 | MURATA GRM188R72A104KA35       |
|       2 | C4, C15                  | 150pF, 5%, 100V, COG, Ceramic capacitor (0402)            |         2 | TDK C1005C0G2A151J050BA        |
|       3 | C11                      | 150uF, 20%, 80V, Electrolytic capacitor                   |         1 | PANASONIC EEV-FK1K151Q         |
|       4 | C12, C13                 | 4.7µF, 10%, 100V, X7R, Ceramic capacitor (1206)           |         2 | MURATA GRM31CZ72A475KE11       |
|       5 | C18                      | 15000pF,10%,50V,X7R,0402,Ceramic capacitor(0402)          |         1 | MURATA GRM155R71H153KA12       |
|       6 | C20                      | 0.01µF, 10%, 50V, X7R, Ceramic capacitor (0402)           |         1 | MURATA GRM155R71H103KA88       |
|       7 | C21                      | 100pF, 5%, 50V, COG, Ceramic capacitor (0402)             |         1 | MURATA GRM1555C1H101JA01       |
|       8 | C22                      | 1UF, 10%, 16V, X7R, Ceramic capacitor (0603)              |         1 | MURATA GRM188R71C105KA12       |
|       9 | C23                      | 10UF, 10%, 10V, X7R, Ceramic capacitor (0805)             |         1 | TAIYO YUDEN LMK212AB7106KG     |
|      10 | C24                      | 0.47UF, 10%, 16V, X7R, Ceramic capacitor (0603)           |         1 | MURATA GRM188R71C474KA88       |
|      11 | C27, C32                 | 0.1UF, 10%, 16V, X7R, Ceramic capacitor (0402)            |         2 | MURATA GCM155R71C104KA55       |
|      12 | C28                      | 180µF 20%, 6.3V ,X7R,Ceramic capacitor (1210)             |         1 | PANASONIC EEF-SE0J181R         |
|      13 | C30, C31                 | 22UF, 20%, 25V, X7R, Ceramic capacitor (1210)             |         2 | MURATA GRM32ER71E226ME15       |
|      14 | D1                       | ZENER DIODE, VZ=4.7V, IZ=0.005A                           |         1 | COMCHIP CZRU52C4V7             |
|      15 | D2                       | SCHOTTKY DIODE PIV=100V; IF=1A                            |         1 | DIODES INCORPORATED DFLS1100-7 |
|      16 | L1                       | INDUCTOR, 3.3µH, 19.4A (7mm x 7mm)                        |         1 | COILCRAFT XAL7070-332ME        |
|      17 | Q1                       | N-CHANNEL POWER MOSFET(LFPAK) PD-(45W); I-(25A); V-(60V)  |         1 | RENESAS RJK0651DPB-00#J5       |
|      18 | Q2                       | N-CHANNEL POWER MOSFET(LFPAK) PD-(65W); I-(45A); V-(60V)  |         1 | RENESAS RJK0653DPB-00#J5       |
|      19 | R1, R4, R9, R12-R14, R19 | 0Ω, 5%, 1/16W, Resistor (0402)                            |         7 |                                |
|      20 | R2                       | 2.2Ω, 1%, 1/16W, Resistor (0402)                          |         1 |                                |
|      21 | R5                       | 49.9kΩ, 1%, 1/10W, Resistor (0603)                        |         1 |                                |
|      22 | R6                       | 13kΩ, 1%, 1/10W, Resistor (0603)                          |         1 |                                |
|      23 | R8                       | 0.005Ω, 1%, 1W, Resistor (2010)                           |         1 | YAGEO PE2010FKE7W0R005L        |
|      24 | R17                      | 9.53KΩ, 1%, 1/16W, Resistor (0402)                        |         1 |                                |
|      25 | R18                      | 10KΩ, 1%, 1/16W, Resistor (0402)                          |         1 |                                |
|      26 | R20                      | 95.3KΩ, 1%, 1/16W, Resistor (0402)                        |         1 |                                |
|      27 | R21                      | 18.2KΩ, 1%, 1/16W, Resistor (0402)                        |         1 |                                |
|      28 | U1                       | HIGH-EFFICIENCY SYNCHRONOUS STEP-DOWN DC-DC CONTROLLER    |         1 | MAX17557ATP+                   |
|      29 | JU1-JU4                  | 3-pin header (36-pin header 0.1' centers )                |         4 | Sullins: PEC03SAAN             |
|      30 | -                        | Shunts                                                    |         4 |                                |
|      31 | C5, C6, C9, C10          | OPTIONAL: 4.7μF, 10%, 100V, X7R, Ceramic capacitor (1206) |         4 | MURATA GRM31CZ72A475KE11       |
|      32 | L2                       | OPTIONAL: INDUCTOR, 33µH, 3.6A (6mm x 6mm)                |         1 | COILCRAFT XAL6060-333ME        |
|      33 | C1, C19, C25             | OPEN: Capacitor (0402)                                    |         0 |                                |
|      34 | C2, C16                  | OPEN: Capacitor (0603)                                    |         0 |                                |
|      35 | C7, C8                   | OPEN: Capacitor (1206)                                    |         0 |                                |
|      36 | C26                      | OPEN: Capacitor (0402)                                    |         0 |                                |
|      37 | C29                      | OPEN: Electrolytic Capacitor                              |         0 |                                |
|      38 | C33                      | OPEN: Capacitor (0402)                                    |         0 |                                |
|      39 | R3, R10, R11, R16        | OPEN:Resistor (0402)                                      |         0 |                                |

| DEFAULT JUMPER TABLE   | DEFAULT JUMPER TABLE   |
|------------------------|------------------------|
| JUMPER                 | SHUNT POSITION         |
| JU1, JU2, JU4          | 2-3                    |
| JU3                    | 1-2                    |

Evaluates: MAX17557 in 5V

Output-Voltage Application

## MAX17557EVKITE# Schematic

<!-- image -->

## MAX17557EVKITE# Evaluation Kit

## MAX17557EVKITE# PCB Layouts

<!-- image -->

MAX17557EVKITE# Component Placement Guide-Top Silkscreen

MAX17557EVKITE# PCB Layout-Top Layer

<!-- image -->

MAX17557EVKITE# PCB Layout-Bottom Layer

<!-- image -->

## Evaluates: MAX17557 in 5V Output-Voltage Application

<!-- image -->

MAX17557EVKITE# PCB Layout-Layer 2

MAX17557EVKITE# PCB Layout-Layer 3

<!-- image -->

MAX17557EVKITE# Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## MAX17557EVKITE# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/20           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0axim ,ntegrated reserYes the right to change the circuitry and speci¿cations without notice at any time.

│

Evaluates: MAX17557 in 5V

Output-Voltage Application