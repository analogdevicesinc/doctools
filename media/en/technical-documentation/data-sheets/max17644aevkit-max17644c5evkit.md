<!-- lastmod 2022-08-04 -->
## MAX17644A/MAX17644B/MAX17644C Evaluation Kits

## General Description

The MAX17644 evaluation kit (comprising the MAX17644AEVKIT#, MAX17644BEVKIT#, and MAX17644C5EVKIT# EV kits) provides proven designs to evaluate the MAX17644A, MAX17644B, and MAX17644C high-efficiency, high-voltage Himalaya synchronous DC-DC converters.

The MAX17644AEVKIT# EV kit delivers up to 2.7A, with a fixed 3.3V output (V OUT1 ). The EV kit is configured to operate  at  500kHz  (f SW1 )  switching  frequency  over  a 4.5V to 36V input voltage range.

The MAX17644BEVKIT# EV kit delivers up to 2.7A, with a fixed 5V output (V OUT2 ). The EV kit is configured to oper -ate at 500kHz (f SW2 ) switching frequency over a 6.5V to 36V input voltage range.

The MAX17644C5EVKIT# EV kit delivers up to 2.7A, with a configured 5V output (V OUT3 ). The EV kit is also configured to operate at 500kHz (f SW3 ) switching frequency over a 6.5V to 36V input voltage range.

The EV kits are configured to demonstrate the optimum performance  and  component  size.  The  EV  kits  pro -vide provisions for enable/disable settings and selecting the  modes  of  operation  (pulse-width  modulation/pulsefrequency  modulation/discontinuous-conduction  mode [PWM/PFM/DCM]).  The  EV  kits  feature  programmable input undervoltage-lockout (UVLO), adjustable soft-start, open-drain RESET signal, and external clock synchroni -zation. The EV kits also provide a good layout example, which is optimized for conducted, radiated EMI, and ther -mal performance. For more details, refer to the Benefits and Features section in the MAX17644 IC data sheet.

## Evaluate: MAX17644 in 3.3V and 5V Output-Voltage Applications

## Features

- Wide 4.5V to 36V Input Voltage Range
- MAX17644AEVKIT# Offers High 87.28% Efficiency (V IN1  = 24V, V OUT1 = 3.3V, I OUT1 = 2.7A)
- MAX17644BEVKIT# Offers High 90.77% Efficiency (V IN2  = 24V, V OUT2  = 5V, I OUT2  = 2.7A)
- MAX17644C5EVKIT# Offers High 90.77% Efficiency (V IN3 = 24V, V OUT3 = 5V, I OUT3 = 2.7A)
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Selectable PWM, PFM, and DCM Modes of Operation
- Adjustable Soft-Start Time
- RESET Outputs, with Pullup Resistor to Respective VCC
- Provision to Synchronize the Converters to an External Clock Source
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested
- Complies with CISPR32 (EN55032) Class B Conducted and Radiated Emissions

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX17644A/MAX17644B/MAX17644C Evaluation Kits

## Quick Start

## Recommended Equipment

- MAX17644AEVKIT#, MAX17644BEVKIT#, MAX17644C5EVKIT#
- 36V, 3A power supply
- Load capable of sinking 2.7A at 3.3V and 5V
- Two digital multimeters (DMM)

## Equipment Setup and Test Procedure

The EV kits are fully  assembled and tested. Follow the steps below to verify the individual board operation:

## Caution: Do not turn on power supply until all connections are completed.

- 1) Set the input power supply voltage at 3.9V for MAX17644AEVKIT# and at 5.9V for MAX17644BEV -KIT# and MAX17644C5EVKIT#. Disable the power supply.
- 2) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3) Connect the positive terminal of the corresponding load to the respective VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 4) Connect one DMM across respective VOUT PCB pad and the nearest PGND PCB pad, and another DMM across the respective RESET PCB pad and the SGND PCB pad.
- 5) Verify that no shunts are installed on jumpers (JU101, JU201, JU301). See Table 1 for details.
- 6) Select the shunt position on respective jumpers (JU102, JU202, JU302) according to the intended mode of operation. See Table 2 for details.
- 7) Turn on the input power supply.
- 8) Enable the load.
- 9) Observe that both the DMMs display 0V.
- 10) Increase the input voltage to 4.5V or higher for MAX17644AEVKIT# and to 6.5V or higher for MAX17644BEVKIT# and MAX17644C5EVKIT# which are above the EN/UVLO rising thresholds.

## Evaluate: MAX17644 in 3.3V and 5V Output-Voltage Applications

- 11) Verify that the DMM across the output terminals displays 3.3V for MAX17644AEVKIT#, 5V for MAX17644BEVKIT# and MAX17644C5EVKIT#.
- 12) Verify that the DMM across the RESET PCB pad and SGND PCB displays 5V.
- 13)  Reduce the input voltage to 3.6V for MAX17644AE -VKIT# and to 5.3V for MAX17644AEVKIT# and MAX17644C5EVKIT# which are below the EN/UVLO falling thresholds.
- 14) Verify that both the DMMs display 0V.
- 15) Disable the input power supply.

## Detailed Description of Hardware

The MAX17644AEVKIT#, MAX17644BEVKIT#, and MAX17644C5EVKIT# EV kits are designed to demonstrate the salient features of the MAX17644A, MAX17644B, and MAX17644C converter ICs, respectively. All the three cir -cuits are electrically isolated from each other and hosted on the same PCB. Each of the converter ICs can be eval -uated by powering them from their respective input pins. Individual  device  settings  can  be  adjusted  to  evaluate their performance under different operating conditions.

## Soft-Start Input (SS)

The EV kits offer an adjustable soft-start function to limit inrush  current  during  the  startup.  The  soft-start  time  is adjusted by the value of external soft-start capacitors C SS connected between SS and SGND. The selected output capacitance (C SEL ) and the output voltage (V OUT ) determine the minimum value of C SS (C106, C206, C306) as shown in the following equation:

<!-- formula-not-decoded -->

The soft-start time (t SS )  is  related  to  soft-start  capacitor CSS by the following equation:

<!-- formula-not-decoded -->

For  example,  to  program  a  1ms  soft-start  time,  C SS should be 5600pF.

## MAX17644A/MAX17644B/MAX17644C Evaluation Kits

## Enable/Undervoltage Lockout Programming

The  MAX17644A,  MAX17644B,  and  MAX17644C  offer an enable and adjustable input undervoltage lockout (EN/ UVLO) feature. In the EV kits, for normal operation, leave the  jumpers (JU101, JU201, JU301) open. When jump -ers are left open, MAX17644A is enabled when the input voltage rises above 4.4V and MAX17644B, MAX17644C are enabled when the input voltage rises above 6.4V. To disable  the  converters,  install  shunts  across  pin  2-3  on jumpers (JU101, JU201, JU301). See Table 1 for jumper (JU101,  JU201,  JU301)  settings.  The  EN/UVLO  PCB pads on the EV kits support external Enable/Disable con -trol of the device. Leave jumpers (JU101, JU201, JU301) open  when  external  Enable/Disable  control  is  desired. A potential divider formed by resistors R UVL\_TOP (R101, R201, R301) and R UVL\_BOT (R102, R202, R302) sets the input voltage (V INU ) above which the converter is enabled when jumpers (JU101, JU201, JU301) are left open.

## Evaluate: MAX17644 in 3.3V and 5V Output-Voltage Applications

Choose  R UVL\_TOP to  be  3.32MΩ  and  then  calculate R UVL\_BOT as follows:

<!-- formula-not-decoded -->

where R UVL\_BOT is in MΩ. For more details about setting the undervoltage lockout level, refer to the MAX17644 IC data sheet.

## Mode Selection (MODE/SYNC)

The EV kits provide jumpers (JU102, JU202, JU302) that allow the converters to operate in PWM, PFM, and DCM modes. For more details on the modes of operation, refer to  the  MAX17644  data  sheet. Table  2 shows  the  mode selection  jumper  (JU102,  JU202,  JU302)  settings  that can be used to configure the desired mode of operation for each converter.

Table 1. Converter EN/UVLO Jumper (JU101, JU201, and JU301) Settings

| SHUNT POSITION   | EN/UVLO PIN                                                                                             | OUTPUT                                                                    |
|------------------|---------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| 1-2              | Connected to V IN                                                                                       | Enabled                                                                   |
| Not installed*   | Connected to center node of respective resistive dividers (R101 and R102, R201 and R202, R301 and R302) | Enabled, UVLO level is set by the resistor- divider between V IN and SGND |
| 2-3              | Connected to SGND                                                                                       | Disabled                                                                  |

* Default position.

Table 2. Mode Selection Jumper (JU102, JU202, and JU302) Settings

| SHUNT POSITION   | MODE/SYNC PIN     | MODE                  |
|------------------|-------------------|-----------------------|
| 1-2              | Connected to V CC | DCM mode of operation |
| 2-3              | Connected to SGND | PWM mode of operation |
| Not installed*   | Unconnected       | PFM mode of operation |

* Default position.

## MAX17644A/MAX17644B/MAX17644C Evaluation Kits

## External Clock Synchronization (MODE/SYNC)

The EV kits provide MODE/SYNC PCB pads to synchro -nize the MAX17644A, MAX17644B, and MAX17644C to an optional external clock. Leave jumpers (JU102, JU202, JU302) open when external clock signals are applied. In the presence of a valid external clock for synchronization, the MAX17644A, MAX17644B, and MAX17644C operate in PWM mode only. For more details about external clock synchronization, refer to the MAX17644 IC data sheet.

## Active-Low, Open-Drain Reset Output ( RESET )

The EV kits provide RESET PCB pads to monitor the status of the converters. RESET goes high when VOUT rises above 95% (typ) of its nominal regulated output voltage. RESET goes low when VOUT falls below 92% (typ) of its nominal regulated voltage.

## Hot Plug-In and Long Input Cables

The MAX17644AEVKIT#, MAX17644BEVKIT#, and MAX17644C5EVKIT#  EV  kit  PCB  layouts  provide  an optional  electrolytic  capacitor  (C101,  C201,  C301  = 47µF/50V).  These  capacitors  limit  the  peak  voltage  at the input of the converters when the DC input source is

## Evaluate: MAX17644 in 3.3V and 5V Output-Voltage Applications

Hot Plugged to the EV kit input terminals with long input cables.  The  equivalent  series  resistance  (ESR)  of  the electrolytic capacitor dampens the oscillations caused by interaction of the inductance of the long input cables and the ceramic capacitors at the converters' input.

## Electromagnetic Interference

Compliance  to  conducted  emission  (CE)  standards requires  an  electromagnetic  interference  (EMI)  filter  at the  input  of  a  switching  power  converter. The  EMI  filter attenuates high-frequency currents drawn by the switch -ing power converter and limits the noise injected back into the input power source.

The MAX17644AEVKIT#, MAX17644BEVKIT#, and MAX17644C5EVKIT#  PCBs  have  designated  footprints for  the  placement  of  conducted  EMI  filter  components as per the optional bill of material (BOM). Use of these filter  components  results  in  lower  conducted  EMI  below CISPR32  Class  B  limits.  Cut  open  the  trace  at  L102, L202,  and  L302  before  installing  conducted  EMI  filter components. The PCB layouts are also designed to limit radiated  emissions  from  switching  nodes  of  the  power converter resulting in radiated emissions below CISPR32 Class B limits.

## MAX17644A/MAX17644B/MAX17644C Evaluation Kits

## EV Kits Performance Report

(V IN1  = V IN2  = V IN3  = 24V, f SW1 = f SW2 = f SW3  = 500kHz, T A  = +25°C, unless otherwise noted)

<!-- image -->

## Evaluate: MAX17644 in 3.3V and 5V Output-Voltage Applications

## MAX17644A/MAX17644B/MAX17644C Evaluation Kits

## EV Kits Performance Report (continued)

(V IN1  = V IN2  = V IN3  = 24V, f SW1 = f SW2 = f SW3  = 500kHz, T A  = +25°C, unless otherwise noted)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

MAX17644B, V OUT2 = 5V LOAD AND LINE REGULATION

<!-- image -->

MAX17644C, V OUT3 = 5V LOAD AND LINE REGULATION

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluate: MAX17644 in 3.3V and 5V Output-Voltage Applications

## MAX17644A/MAX17644B/MAX17644C Evaluation Kits

## EV Kits Performance Report (continued)

(V IN1  = V IN2  = V IN3  = 24V, f SW1 = f SW2 = f SW3  = 500kHz, T A  = +25°C, unless otherwise noted)

<!-- image -->

<!-- image -->

CONDITIONS: PWM MODE, 92Ω RESISTIVE LOAD

<!-- image -->

<!-- image -->

CONDITIONS: PWM MODE, 61Ω RESISTIVE LOAD

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

CONDITIONS: PWM MODE, 92Ω RESISTIVE LOAD

<!-- image -->

## Evaluate: MAX17644 in 3.3V and 5V Output-Voltage Applications

## MAX17644A/MAX17644B/MAX17644C Evaluation Kits

## EV Kits Performance Report (continued)

(V IN1  = V IN2  = V IN3  = 24V, f SW1 = f SW2 = f SW3  = 500kHz, T A  = +25°C, unless otherwise noted)

<!-- image -->

## Evaluate: MAX17644 in 3.3V and 5V Output-Voltage Applications

## MAX17644A/MAX17644B/MAX17644C Evaluation Kits

## EV Kits Performance Report (continued)

(V IN1  = V IN2  = V IN3  = 24V, f SW1 = f SW2 = f SW3  = 500kHz, T A  = +25°C, unless otherwise noted)

<!-- image -->

## Evaluate: MAX17644 in 3.3V and 5V Output-Voltage Applications

## MAX17644A/MAX17644B/MAX17644C Evaluation Kits

## EV Kits Performance Report (continued)

(V IN1  = V IN2  = V IN3  = 24V, f SW1 = f SW2 = f SW3  = 500kHz, T A  = +25°C, unless otherwise noted)

<!-- image -->

CONDITIONS: 0.2Ω RESISTIVE LOAD

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluate: MAX17644 in 3.3V and 5V Output-Voltage Applications

## MAX17644A/MAX17644B/MAX17644C Evaluation Kits

## EV Kits Performance Report (continued)

(V IN1  = V IN2  = V IN3  = 24V, f SW1 = f SW2 = f SW3  = 500kHz, T A  = +25°C, unless otherwise noted)

<!-- image -->

CONDITIONS: 1.85Ω RESISTIVE LOAD

<!-- image -->

## Component Suppliers

| SUPPLIER        | WEBSITE             |
|-----------------|---------------------|
| Coilcraft       | www.coilcraft.com   |
| Murata Americas | www.murata.com      |
| Panasonic       | www.panasonic.com   |
| TDK corp.       | www.tdk.com         |
| SullinsCorp     | www.sullinscorp.com |

Note: Indicate that you are using the MAX17644A/MAX17644B/ MAX17644C when contacting these component suppliers.

<!-- image -->

CONDITIONS: 1.85Ω RESISTIVE LOAD

MAX17644C, V OUT3 = 5V, 2.7A LOAD CURRENT

<!-- image -->

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX17644AEVKIT#  | EV Kit |
| MAX17644BEVKIT#  | EV Kit |
| MAX17644C5EVKIT# | EV Kit |

# Denotes RoHS compliance.

## Evaluate: MAX17644 in 3.3V and 5V Output-Voltage Applications

## MAX17644A/MAX17644B/MAX17644C Evaluation Kits

## MAX17644 EV Kit Bill of Materials

|   S.No | DESIGNATOR                               | DESCRIPTION                                                                   |   QUANITITY | MANUFACTURER PART NUMBER       |
|--------|------------------------------------------|-------------------------------------------------------------------------------|-------------|--------------------------------|
|      1 | C101, C201, C301                         | 47µF; 20%; 50V; Electrolytic Capacitor                                        |           3 | PANASONIC EEE-TG1H470UP        |
|      2 | C102, C202, C302                         | 4.7µF±10%; 50V; X7R; Ceramic Capacitor (1206)                                 |           3 | MURATA GRM31CR71H475KA12       |
|      3 | C103, C113, C203, C213, C303, C313       | 0.1µF±10%; 100V; X7R; Ceramic Capacitor (0603)                                |           6 | MURATA GRM188R72A104KA35       |
|      4 | C104, C112, C204, C212, C304, C312       | 150pF±5%; 100V; C0G; Ceramic Capacitor (0402)                                 |           6 | TDK C1005C0G2A151J050BA        |
|      5 | C105, C205, C305                         | 2.2µF±10%; 10V; X7R; Ceramic Capacitor (0603)                                 |           3 | MURATA GRM188R71A225KE15       |
|      6 | C106, C206, C306                         | 5600pF±10%; 25V; X7R; Ceramic Capacitor (0402)                                |           3 | MURATA GRM155R71E562KA01       |
|      7 | C107, C110, C207, C210, C307, C310       | 0.1µF±10%; 16V; X7R; Ceramic Capacitor (0402)                                 |           6 | TDK C1005X7R1C104K050BC        |
|      8 | C108                                     | 47µF±10%; 10V; X7R; Ceramic Capacitor (1210)                                  |           1 | MURATA GRM32ER71A476KE15       |
|      9 | C208, C308                               | 22µF±20%; 16V; X7R; Ceramic Capacitor (1210)                                  |           2 | TDK C3225X7R1C226M250AC        |
|     10 | JU101, JU102, JU201, JU202, JU301, JU302 | 3-pin Header (2.54mm)                                                         |           6 | SULLINS PEC03SAAN              |
|     11 | L101                                     | 5.6µH±20%; IRMS = 7.2A; Inductor (5.3mmx5.5mm)                                |           1 | COILCRAFT XAL5050-562ME        |
|     12 | L201, L301                               | 8.2µH±20%; IRMS = 4.5A; Inductor (5.3mmx5.5mm)                                |           2 | COILCRAFT XAL5050-822ME        |
|     13 | R101, R201, R301                         | 3.32MΩ ±1%; 0.063W, Resistor (0402)                                           |           3 |                                |
|     14 | R102                                     | 1.37MΩ±1%; 0.063W, Resistor (0402)                                            |           1 |                                |
|     15 | R103, R203, R303                         | 40.2kΩ±1%; 0.063W, Resistor (0402)                                            |           3 |                                |
|     16 | R104, R204, R304                         | 10kΩ±1%; 0.063W, Resistor (0402)                                              |           3 |                                |
|     17 | R105, R107, R206, R207, R306             | 0; Jumper; 0.1W, Resistor (0402)                                              |           5 |                                |
|     18 | R202, R302                               | 825kΩ±1%; 0.063W, Resistor (0402)                                             |           2 |                                |
|     19 | R307                                     | 200kΩ±1%; 0.063W, Resistor (0402)                                             |           1 |                                |
|     20 | R308                                     | 44.2kΩ±1%; 0.1W, Resistor (0402)                                              |           1 |                                |
|     21 | SU101, SU102, SU201, SU202, SU301, SU302 | Jumper Socket (2.54mm)                                                        |           6 | SULLINS STC02SYAN              |
|     22 | U101                                     | High-Efficiency, Synchronous Step-Down DC-DC Converter (16 Pin TQFN, 3mmx3mm) |           1 | MAXIM INTEGRATED MAX17644AATE+ |
|     23 | U201                                     | High-Efficiency, Synchronous Step-Down DC-DC Converter (16 Pin TQFN, 3mmx3mm) |           1 | MAXIM INTEGRATED MAX17644BATE+ |
|     24 | U301                                     | High-Efficiency, Synchronous Step-Down DC-DC Converter (16 Pin TQFN, 3mmx3mm) |           1 | MAXIM INTEGRATED MAX17644CATE+ |
|     25 | C315-C317                                | Optional: 4.7µF±10%; 50V; X7R; Ceramic Capacitor (1206)                       |           3 | MURATA GRM31CR71H475KA12       |
|     26 | L302                                     | Optional: 15μH±20%; IRMS = 2.2A, Inductor (4mm x 4mm)                         |           1 | COILCRAFT XAL4040-153ME        |
|     27 | C115-C117, C215-C217                     | Open: Capacitor (1210)                                                        |           0 |                                |
|     28 | L102, L202                               | Open: Inductor (4mmx4mm)                                                      |           0 |                                |
|     29 | C109, C209, C309                         | Open: Capacitor (1210)                                                        |           0 |                                |
|     30 | C111, C114, C211, C214, C311, C314       | Open: Capacitor (0402)                                                        |           0 |                                |
|     31 | R106, R108, R205, R208, R305             | Open: Resistor (0402)                                                         |           0 |                                |

| DEFAULT JUMPER TABLE   |                |
|------------------------|----------------|
| JUMPER                 | SHUNT POSITION |
| JU101, JU201, JU301    | Open           |
| JU102, JU202, JU302    | Open           |

## Evaluate: MAX17644 in 3.3V and 5V Output-Voltage Applications

## MAX17644 EV Kit Schematics

## MAX17644AEVKIT# Schematic Diagram

<!-- image -->

## MAX17644A/MAX17644B/MAX17644C Evaluation Kits

## MAX17644 EV Kit Schematics (continued)

## MAX17644BEVKIT# Schematic Diagram

<!-- image -->

## MAX17644A/MAX17644B/MAX17644C Evaluation Kits

## MAX17644 EV Kit Schematics (continued)

## MAX17644C5EVKIT# Schematic Diagram

<!-- image -->

## MAX17644A/MAX17644B/MAX17644C Evaluation Kits

## MAX17644 EV Kit PCB Layout

MAX17644 EV Kits-Silk Top

<!-- image -->

MAX17644 EV Kits-Top

<!-- image -->

## Evaluate: MAX17644 in 3.3V and 5V Output-Voltage Applications

## MAX17644A/MAX17644B/MAX17644C Evaluation Kits

## MAX17644 EV Kit PCB Layout (continued)

MAX17644 EV Kits-L2 GND

<!-- image -->

MAX17644 EV Kits-L3 GND

<!-- image -->

## MAX17644A/MAX17644B/MAX17644C Evaluation Kits

## MAX17644 EV Kit PCB Layout (continued)

MAX17644 EV Kits-Bottom

<!-- image -->

MAX17644 EV Kits-Silk Bottom

<!-- image -->

## MAX17644A/MAX17644B/MAX17644C Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluate: MAX17644 in 3.3V and 5V Output-Voltage Applications