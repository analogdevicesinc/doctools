<!-- lastmod 2022-08-02 -->
## MAX17643 Evaluation Kit

## General Description

The MAX17643 evaluation kit (EV kit) provides a proven 5V  and  3.3V  designs  to  evaluate  the  MAX17643  highvoltage,  high-efficiency,  synchronous  step-down  DC-DC converter. The 3.3V application circuit operates over a 6V to 60V input-voltage range at 500kHz. The 5V application circuit  operates  over  a  7.5V  to  60V  input-voltage  range at 500kHz.

Each application circuit on the EV kit features an adjust -able  input  undervoltage-lockout,  adjustable  soft-start, open-drain RESET signal, and external frequency synchronization.  The MAX17643  converter  data  sheet provides a complete description of the part that should be read in conjunction with this data sheet before operating the EV kit.

## Features

- Operates up to 60V Input Supply
- 5V and 3.3V Application Circuits
- Up to 2A Load Current
- 500kHz Switching Frequency
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Programmed 1ms Soft-Start Time
- Open-Drain RESET Output
- External Frequency Synchronization
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Evaluates: MAX17643 in 5V and 3.3V Output-Voltage Applications

## Quick Start

## Required Equipment

- One 60V, 2A DC power supply
- Digital multimeters (DMM)
- Load resistors capable of sinking up to 2A. (1.65Ω for 3.3V application circuit and 2.5Ω for 5V application circuit)

## Equipment Setup and Procedure

The EV kit is fully assembled and tested.  Follow the steps below to verify and test individual application circuits:

Caution:  Do  not  turn  on  power  supply  until  all connections are completed.

- 1) Disable  the  power  supply  and  set  the  input-power supply at a valid input voltage.
- 2) Connect the positive terminal and negative terminal of the power supply to the VIN pad and its adjacent PGND pad of the application circuit under evaluation.
- 3) Connect the positive  terminal  of  the  2A  load  to  the VOUT pad and the negative terminal to the nearest PGND pad of the corresponding application circuit.
- 4) Connect  the  DMM  across  the  VOUT  pad  and  the nearest PGND pad.
- 5) Verify that the shunts are not installed across pins on jumper JU101 for 3.3V application circuit and JU201 for 5V application circuit. See Table 1 for details.
- 6) Turn on the input-power supply.
- 7) Verify that the DMMs display expected terminal volt -ages with respect to PGND.

<!-- image -->

## MAX17643 Evaluation Kit

## Detailed Description

The  MAX17643  EV  kit  is  designed  to  demonstrate the  salient  features  of  MAX17643  high-voltage,  high efficiency,  synchronous  step-down  DC-DC  converter  in 5V and 3.3V applications. The EV kit consists of typical application circuits for 5V and 3.3V. Each of these circuits are  electrically  isolated  from  each  other  and  hosted  on the same PCB. Each of these circuits can be evaluated for its performance under different operating conditions by powering them from their respective input pins.

## Setting Switching Frequency

The switching  frequency  of  the  MAX17643  can  be  pro -grammed  from  400kHz  to  2.2MHz  by  using  a  resistor connected  from  the  RT/SYNC  pin  to  GND.  Resistors R104  in  the  3.3V  application  circuit  and  R204  in  the 5V  application  circuit  programs  the  desired  switching frequencies. When no resistor is used, the frequency is programmed  to  490kHz.  To  optimize  performance  and component size in the EV kit, 500kHz switching frequency has been chosen for 3.3V and 5V application circuits. Use the Switching Frequency section of the MAX17643 data sheet to choose different values of resistors for program -ming the required switching frequency.

## Soft-Start Capacitor Selection

The  EV  kit  offers  an  adjustable  soft-start  function  to limit  inrush  current  during  startup.  The  soft-start  time  is adjusted  by  changing  the  value  of  capacitor  C111  for  a 3.3V  application  circuit  and  C211  for  a  5V  application circuit.  In  this  EV  kit,  the  default  soft-start  time  is  set  to 1ms,  which  is  achieved  by  using  a  5600pF  soft-start capacitor  for  both  3.3V  and  5V  application  circuits.  To program a different soft-start time, refer to the MAX17643 data sheet to calculate the soft-start capacitor value.

## Enable/Undervoltage Lockout (EN/UVLO) Programming

The 5V and 3.3V application circuits offer an adjustable input undervoltage-lockout level. For the 3.3V application circuit,  when jumper JU101 is left open, the MAX17643 is  enabled  when  the  input  voltage  rises  above  5.5V. To disable the MAX17643, install shunt JU101 across pins 2-3. For the 5V application circuit, when jumper JU201 is  left  open,  the  MAX17643  is  enabled  when  the  input voltage rises above 7V. To disable the MAX17643, install shunt across pins 2-3 on jumper JU201. See Table 1 for jumper  settings.  Refer  to  the Setting  the  Undervoltage Lockout  Level section  in  the MAX17643 data sheet for more details.

## Evaluates: MAX17643 in 5V and 3.3V Output-Voltage Applications

If  the  EN/UVLO  pin  is  driven  from  an  external  signal source,  it  is  recommended  that  a  series  resistance  of a minimum of 1kΩ is placed between the signal source output  and  the  EN/UVLO  pin  to  reduce  voltage  ringing on the line.

## Adjusting Output Voltage

The MAX17643 supports a 0.9V to (0.9 x V IN ) V adjust -able  output  voltage.  MAX17643  EV  kit  consists  of  two application  circuits  configured  to  3.3V  output  and  5V output. In the 3.3V application circuit, the output voltage is programmed using the resistor divider R106 and R107 and in the 5V application circuit, the output voltage is pro -grammed using the resistor divider R206 and R207. Refer to the Adjusting Output Voltage section in the MAX17643 data sheet for more details.

## Input Capacitor Selection

The input capacitors C105 for the 3.3V application circuit and C205 for the 5V application circuit, serve to reduce current  peaks  drawn  from  the  input-power  supply  and reduce the switching frequency ripple at the input. Refer to the Input Capacitor Selection section in the MAX17643 data sheet to choose input capacitance. The input capaci -tor is chosen to be 4.7µF/100V in both the 3.3V and 5V application circuits.

## Output Capacitor Selection

X7R ceramic capacitors are preferred due to their stabil -ity  over  the  temperature  in  industrial  applications.  For the 3.3V application circuit, the required output capacitor (C113) is 47µF/10V and for the 5V application circuit, the required output capacitor (C213) is 22µF/16V. Refer   to the Output capacitor selection section in the MAX17643 data sheet for more details.

## Table 1. Step-Down Converter (EN/UVLO) Description (JU101 and JU201)

| SHUNT POSITION   | EN/UVLO PIN                                                                                                                                              | OUTPUT                                               |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| Not installed*   | Connected to the center nodes of the respective resistor-dividers (R101 and R102 for 3.3V application circuit; R201 and R202 for 5V application circuit) | Programmed to startup at desired input-voltage level |
| 1-2              | Connected to V IN                                                                                                                                        | Enabled                                              |
| 2-3              | Connected to GND                                                                                                                                         | Disabled                                             |

* Default Position

## MAX17643 Evaluation Kit

## Linear Regulator (VCC and EXTVCC)

Powering  V CC   from  EXTVCC  increases  the  efficiency of  the  module  at  higher  input  voltages.  If  the  applied EXTVCC voltage is greater than 4.7V (typ), internal V CC is powered from EXTVCC. If EXTVCC is lower than 4.7V (typ),  internal  V CC   is  powered  from  V IN .  EXTVCC  is connected to GND in the 3.3V application circuit and to OUT in the 5V application circuit.

## Hot Plug-In and Long input cables

The  MAX17643  EV  kit  provides  optional  electrolytic capacitors  (C104  in  3.3V  application  circuit  and  C204

## MAX17643 EV Kit Performance Reports

<!-- image -->

5V OUTPUT OUTPUT VOLTAGE vs. LOAD CURRENT FIGURE 2 CIRCUIT

<!-- image -->

<!-- image -->

## Evaluates: MAX17643 in 5V and 3.3V Output-Voltage Applications

in  5V  application  circuit,  33µF/100V)  to  dampen  inputvoltage  peaks  and  oscillations  that  can  arise  during hot-plug-in and/or due to long input cables. These capaci -tors  limit  the  peak  voltage  at  the  input  of  the  DC-DC converters  when  the  EV  kit  is  powered  directly  from  a precharged capacitive source or an industrial backplane PCB. Long input cables between an input-power source and the EV kit circuit can cause input-voltage oscillations due to the inductance of the cables. The equivalent series resistance (ESR) of the electrolytic capacitor helps damp out the oscillations caused by long input cables.

<!-- image -->

STARTUP/SHUTDOWN THROUGH EN/UVLO 1.65Ω RESISTIVE LOAD FIGURE 1 CIRCUIT

<!-- image -->

CONDITION: RESET IS PULLED UP TO V CC WITH A 10kΩ RESISTOR

STARTUP/SHUTDOWN THROUGH EN/UVLO 2.5Ω RESISTIVE LOAD FIGURE 2 CIRCUIT

<!-- image -->

CONDITION: RESET IS PULLED UP TO V CC WITH A 10kΩ RESISTOR

## MAX17643 EV Kit Performance Reports (continued)

<!-- image -->

CONDITION:

RESET

IS PULLED UP TO V CC WITH A 10kΩ RESISTOR

<!-- image -->

<!-- image -->

<!-- image -->

CONDITION: RESET IS PULLED UP TO V CC WITH A 10kΩ RESISTOR

<!-- image -->

<!-- image -->

## MAX17643 EV Kit Performance Reports (continued)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17643 Evaluation Kit

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| Murata Americas | www.murata.com    |
| Panasonic Corp  | www.panasonic.com |
| Coilcraft, Inc. | www.coilcraft.com |
| Vishay          | www.vishay.com    |
| KEMET           | www.kemet.com     |
| TDK             | www.tdk.com       |
| Yageo           | www.yageo.com     |

Note: Indicate that you are using the MAX17643 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17643EVKIT# | EV Kit |

#Denotes RoHS compliance.

## MAX17643 EV Kit Bill of Materials

## MAX17643 3.3V Application Circuit

|   ITEM |   QTY | REF DES    | MFG PART #          | MANUFACTURER   | DESCRIPTION                                       |
|--------|-------|------------|---------------------|----------------|---------------------------------------------------|
|      1 |     2 | C101, C106 | GRM188R72A104KA35   | MURATA         | 0.1UF ± 10%, 100V, X7R, Ceramic Capacitor (0603)  |
|      2 |     1 | C104       | EEE-FK1K330P        | PANASONIC      | 33UF ± 20%, 80V, Aluminium-Electrolytic Capacitor |
|      3 |     1 | C105       | GRM31CZ72A475KE11   | MURATA         | 4.7UF ± 10%, 100V, X7R, Ceramic Capacitor (1206)  |
|      4 |     1 | C107       | C1608C0G2A221J080AA | TDK            | 220pF ± 5%, 100V, C0G, Ceramic Capacitor (0603)   |
|      5 |     1 | C108       | C0402C101K5GAC      | KEMET          | 100pF ± 10%, 50V, C0G, Ceramic Capacitor (0402)   |
|      6 |     1 | C109       | GCM1555C1H470JA16   | MURATA         | 47pF ± 5%, 50V, C0G, Ceramic Capacitor (0402)     |
|      7 |     1 | C110       | GRM188R71A225KE15   | MURATA         | 2.2UF ± 10%, 10V, X7R, Ceramic Capacitor (0603)   |
|      8 |     1 | C111       | GRM1555C1H562GE01   | MURATA         | 5600pF ± 2%, 50V, C0G, Ceramic Capacitor (0402)   |
|      9 |     2 | C112, C115 | GRM155R71C104KA88   | MURATA         | 0.1UF ± 10%, 16V, X7R, Ceramic Capacitor (0402)   |
|     10 |     1 | C113       | GRM32ER71A476KE15   | MURATA         | 47UF ± 10%, 10V, X7R, Ceramic Capacitor (1210)    |
|     11 |     1 | D101       | BAT54WS-E3-08       | VISHAY         | Diode, PIV=30V, SOD-323                           |
|     12 |     1 | JU101      | PBC03SAAN           | SULLINS        | 3 pin header                                      |
|     13 |     1 | L102       | XAL5050-682ME       | COILCRAFT      | 6.8UH ± 20%, 6.4A, Inductor                       |
|     14 |     1 | R101       | CRCW0402953KFKEDC   | VISHAY         | 953K ± 1% resistor (0402)                         |
|     15 |     1 | R102       | CRCW04023M32FK      | VISHAY DALE    | 3.32M ± 1% resistor (0402)                        |
|     16 |     1 | R103       | ERJ-2RKF1001        | PANASONIC      | 1k ± 1% resistor (0402)                           |
|     17 |     1 | R104       | CRCW040240K2FK      | VISHAY DALE    | 40.2k ± 1% resistor (0402)                        |
|     18 |     1 | R105       | CRCW040210K0FK      | VISHAY DALE    | 10k ± 1% resistor (0402)                          |
|     19 |     1 | R106       | ERA-2AEB5232        | PANASONIC      | 52.3k ± 1% resistor (0402)                        |
|     20 |     1 | R107       | RT0402BRD0719K6L    | YAGEO          | 19.6k ± 1% resistor (0402)                        |
|     21 |     1 | U101       | MAX17643            | MAXIM          | Buck Converter, MAX17643 IC                       |
|     22 |     1 | C102       | N/A                 | N/A            | OPEN                                              |
|     23 |     1 | L101       | N/A                 | N/A            | OPEN                                              |
|     24 |     1 | C103       | N/A                 | N/A            | OPEN                                              |
|     25 |     1 | C114       | N/A                 | N/A            | OPEN                                              |

## MAX17643 EV Kit Bill of Materials (continued)

## MAX17643 5V Application Circuit

|   ITEM |   QTY | REF DES          | MFG PART #          | MANUFACTURER   | DESCRIPTION                                       |
|--------|-------|------------------|---------------------|----------------|---------------------------------------------------|
|      1 |     2 | C201, C206       | GRM188R72A104KA35   | MURATA         | 0.1UF ± 10%, 100V, X7R, Ceramic Capacitor (0603)  |
|      2 |     1 | C204             | EEE-FK1K330P        | PANASONIC      | 33UF ± 20%, 80V, Aluminium-Electrolytic Capacitor |
|      3 |     1 | C205             | GRM31CZ72A475KE11   | MURATA         | 4.7UF ± 10%, 100V, X7R, Ceramic Capacitor (1206)  |
|      4 |     1 | C207             | C1608C0G2A221J080AA | TDK            | 220pF ± 5%, 100V, C0G, Ceramic Capacitor (0603)   |
|      5 |     1 | C208             | C0402C101K5GAC      | KEMET          | 100pF ± 10%, 50V, C0G, Ceramic Capacitor (0402)   |
|      6 |     1 | C209             | GCM1555C1H470JA16   | MURATA         | 47pF ± 5%, 50V, C0G, Ceramic Capacitor (0402)     |
|      7 |     1 | C210             | GRM188R71A225KE15   | MURATA         | 2.2UF ± 10%, 10V, X7R, Ceramic Capacitor (0603)   |
|      8 |     1 | C211             | GRM1555C1H562GE01   | MURATA         | 5600pF ± 2%, 50V, C0G, Ceramic Capacitor (0402)   |
|      9 |     3 | C212, C215, C216 | GRM155R71C104KA88   | MURATA         | 0.1UF ± 10%, 16V, X7R, Ceramic Capacitor (0402)   |
|     10 |     1 | C213             | GRM32ER71C226KEA8   | MURATA         | 22UF ± 10%, 16V, X7R, Ceramic Capacitor (1210)    |
|     11 |     1 | D201             | BAT54WS-E3-08       | VISHAY         | Diode, PIV=30V, SOD-323                           |
|     12 |     1 | JU201            | PBC03SAAN           | SULLINS        | 3 pin header                                      |
|     13 |     1 | L202             | XAL5050-103ME       | COILCRAFT      | 10UH ± 20%, 4.9A, Inductor                        |
|     14 |     1 | R201             | ERJ-2RKF6983        | PANASONIC      | 698K ± 1% resistor (0402)                         |
|     15 |     1 | R202             | CRCW04023M32FK      | VISHAY DALE    | 3.32M ± 1% resistor (0402)                        |
|     16 |     1 | R203             | ERJ-2RKF1001        | PANASONIC      | 1k ± 1% resistor (0402)                           |
|     17 |     1 | R204             | CRCW040240K2FK      | VISHAY DALE    | 40.2k ± 1% resistor (0402)                        |
|     18 |     1 | R205             | CRCW040210K0FK      | VISHAY DALE    | 10k ± 1% resistor (0402)                          |
|     19 |     1 | R206             | RC0402FR-07105KL    | YAGEO          | 105k ± 1% resistor (0402)                         |
|     20 |     1 | R207             | CRCW040223K2FK      | VISHAY         | 23.2k ± 1% resistor (0402)                        |
|     21 |     1 | R208             | CRCW04024R70FK      | VISHAY DALE    | 4.7 ± 1% resistor (0402)                          |
|     22 |     1 | U201             | MAX17643            | MAXIM          | Buck Converter, MAX17643 IC                       |
|     23 |     1 | C202             | N/A                 | N/A            | OPEN                                              |
|     24 |     1 | L201             | N/A                 | N/A            | OPEN                                              |
|     25 |     1 | C203             | N/A                 | N/A            | OPEN                                              |
|     26 |     1 | C214             | N/A                 | N/A            | OPEN                                              |

## MAX17643 EV Kit Schematic Diagrams

Figure 1. 3.3V Application Circuit Schematic Diagram

<!-- image -->

## MAX17643 EV Kit Schematic Diagrams (continued)

Figure 2. 5V Application Circuit Schematic Diagram

<!-- image -->

## MAX17643 EV Kit PCB Layout Diagrams

MAX17643 EV Kit PCB Layout Diagrams-Top Silkscreen

<!-- image -->

MAX17643 EV Kit PCB Layout Diagrams-Top Layer

<!-- image -->

## MAX17643 EV Kit PCB Layout Diagrams (continued)

MAX17643 EV Kit PCB Layout Diagrams-Layer 2

<!-- image -->

MAX17643 EV Kit PCB Layout Diagrams-Layer 3

<!-- image -->

## MAX17643 EV Kit PCB Layout Diagrams (continued)

MAX17643 EV Kit PCB Layout Diagrams-Bottom Layer

<!-- image -->

MAX17643 EV Kit PCB Layout Diagrams-Bottom Silkscreen

<!-- image -->

## MAX17643 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------|-----------------|
|                 0 | 12/20           | Release for Market Intro | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://w.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX17643 in 5V and

3.3V Output-Voltage Applications