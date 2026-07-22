<!-- lastmod 2022-08-02 -->
## MAX17760AEVKIT# Evaluation Kit

## General Description

The MAX17760AEVKIT# evaluation kit (EV kit) provides a proven design to evaluate the MAX17760 high-efficiency, high-voltage,  synchronous  step-down  DC-DC  converter in  a  TDFN  package.  The  EV  kit  generates  5V  at  load currents  up  to  300mA  from  a  7V  to  76V  input  supply. The  EV  kit  features  a  400kHz  switching  frequency  for optimum efficiency and component size. The EV kit fea -tures  adjustable  input  undervoltage  lockout,  adjustable soft-start,  adjustable  switching  frequency,  open-drain RESET signal, and  external clock synchronization. The EV kit also provides a good layout example, which is  optimized  for  conducted,  radiated  EMI,  and  thermal performance. For more details about the IC benefits and features, refer to the MAX17760 IC data sheet .

## Features

- Operates from a 7V to 76V Input Supply
- 5V Output Voltage
- Up to 300mA Output Current
- 400kHz Switching Frequency
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Adjustable Soft-Start Time
- MODE Pin to Select between PWM or PFM Modes
- Bootstrap Bias Input for Improved Efficiency
- Open-Drain RESET Output
- External Clock Synchronization
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested
- Complies with CISPR22 (EN55022) Class B Conducted and Radiated Emissions

Ordering Information appears at end of data sheet.

Evaluates: MAX17760 in

## 5V Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX17760 5V output EV kit
- 76V, 0.5A DC input power supply
- Load capable of sinking 300mA
- 2 digital voltmeters (DVM)

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution:  Do  not  turn  on  power  supply  until  all connections are completed.

- 1) Set  the  power  supply  at  a  voltage  of  5.5V.  Then, disable the power supply.
- 2) Connect the positive terminal of the power supply to the  VIN  PCB  pad  and  the  negative  terminal  to  the nearest PGND PCB pad. Connect the positive termi -nal of the 300mA load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3) Connect one DVM across the VOUT PCB pad and the nearest PGND PCB pad, and the other DVM across RESET PCB pad and SGND PCB pad.
- 4) Verify  that  shunts  are  installed  across  pins  1-2  on jumper  JU1  and  JU2  (see Table  1  and Table  2  for details), and on pin 1 of JU3.
- 5) Turn on the DC power supply.
- 6) Enable the load.
- 7) Verify that both the DVMs displays approximately 0V.
- 8) Increase the input voltage to 7V, which is just above the EN/UVLO rising threshold.
- 9) Verify that the DVM across the VOUT PCB pad and the nearest PGND PCB pad displays 5V.
- 10) Verify that the DVM across the RESET PCB pad and the SGND PCB pad displays 5V.
- 11) The power-supply voltage can be set at any voltage between 7V and 76V and both the DVMs still read the same voltages.
- 12)  Reduce the input voltage to 5V, which is below the EN/UVLO falling threshold.
- 13)  Verify that both the DVMs displays approximately 0V.
- 14)  Disable the input power supply.

<!-- image -->

## MAX17760AEVKIT# Evaluation Kit

## Detailed Description

The  MAX17760AEVKIT#  provides  a  proven  design  to evaluate  the  MAX17760  high-efficiency,  high-voltage, synchronous  step-down  DC-DC  converter.  The  EV  kit generates 5V at load currents up to 300mA from a 7V to 76V input supply. The EV kit features a 400kHz switching frequency  for  optimum  efficiency  and  component  size. The EV kit includes an EN/UVLO PCB pad and JU1 to enable the output at a desired input voltage or enable the converter through an external enable signal on the EN/ UVLO PCB pad. The RT/SYNC PCB pad and JU3 allow an external clock to synchronize the device. An additional RESET PCB  pad  is  available  for  monitoring  when  the converter output is in regulation.

## Enable/Undervoltage-Lockout (EN/UVLO) Programming

The MAX17760 offers an Enable and an adjustable input undervoltage lockout feature. In this EV kit, for always-on operation,  leave  the  EN/UVLO  jumper  (JU1)  open.  To disable the MAX17760, install a shunt across pins 2-3 on JU1. See Table 1 for  JU1  settings.  The  EN/UVLO  PCB pad on the EV kit supports external Enable/Disable con -trol of the device. Leave JU1 open when external Enable/ Disable control is desired. A potential divider formed by R1 and R2 sets the input voltage (V INU ) above which the converter is enabled when a shunt is connected across pins 1-2 on JU1.

Choose R1 as follows:

<!-- formula-not-decoded -->

## Table 1. Converter EN/UVLO Jumper (JU1) Settings

| JUMPER   | SHUNT POSITION   | EN/UVLO PIN                                                | MAX17760 OUTPUT                                         |
|----------|------------------|------------------------------------------------------------|---------------------------------------------------------|
| JU1      | 1-2*             | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistors |
| JU1      | Not installed    | Floating                                                   | Always ON                                               |
| JU1      | 2-3              | Connected to SGND                                          | Disabled                                                |

* Default Position

## Evaluates: MAX17760 in 5V Output-Voltage Application

where, V INU  is the voltage at which the device is required to turn on, and R1 is in Ω. Calculate the value of R2 as follows:

<!-- formula-not-decoded -->

## Soft-Start Input (SS)

The  EV  kit  offers  an  adjustable  soft-start  function  to limit  inrush  current  during  startup.  The  soft-start  time  is adjusted by the value of external soft-start capacitor (C6) connected between SS and SGND. The selected output capacitance (C SEL ) and the output voltage (V OUT ) determine the minimum required soft-start capacitor as follows:

<!-- formula-not-decoded -->

The soft-start time (t SS )  is  related  to  the  capacitor  con -nected at SS (C SS ) by the following equation:

<!-- formula-not-decoded -->

For example, to program a 0.9ms soft-start time, a 5.6nF capacitor should be connected from the SS pin to SGND.

## Mode of Operation Selection (MODE)

The  EV  kit  provides  a  jumper  (JU2)  that  allows  the MAX17760  to  operate  either  in  PWM  or  PFM  modes. Table 2 shows the mode selection (JU2) settings that can be used to configure the desired mode of operation. Refer to the MAX17760 IC data sheet for  more details on the modes of operation.

The mode of operation cannot be changed on-the-fly after power-up.

## Table 2. Modes Selection Jumper (JU2) Settings

| SHUNT POSITION   | MODE PIN          | MODE OF OPERATION   |
|------------------|-------------------|---------------------|
| 1-2*             | Connected to SGND | PWM                 |
| Not Installed    | Unconnected       | PFM                 |

* Default Setting

## MAX17760AEVKIT# Evaluation Kit

## External Clock Synchronization (RT/SYNC)

The EV kit provides an RT/SYNC PCB pad, to synchro -nize the MAX17760 to an optional external clock. Short jumper  (JU3)  when  external  clock  signals  are  applied. See Table 3 for JU3 settings. In the presence of a valid external clock for synchronization, the MAX17760 oper -ates in PWM mode only. For more details about external clock  synchronization,  refer  to  the MAX17760  IC  data sheet .

## Active-Low, Open-Drain Reset Output ( RESET )

The EV kit  provides  a RESET PCB  pad  to  monitor  the status  of  the  converter. RESET goes  high  when  V OUT rises above 95% (typ) of its nominal regulated output volt -age. RESET goes low when V OUT falls below 92% (typ) of its nominal regulated voltage.

## Hot Plug-In and Long Input Cables

The  MAX17760AEVKIT#  EV  kit  PCB  layout  provides an  optional  electrolytic  capacitor  (C1  =  22μF/100V). This capacitor limits the peak voltage at the input of the MAX17760 when the DC input source is 'Hot-Plugged' to the EV kit input terminals with long input cables. The equivalent  series  resistance  (ESR)  of  the  electrolytic capacitor  dampens  the  oscillations  caused  by  interac -tion  of  the  inductance  of  the  long  input  cables,  and  the ceramic capacitors at the buck converter input.

## Table 3. External Clock Synchronization Jumper (JU3) Settings

| SHUNT POSITION   | RT/SYNC PIN                                            |
|------------------|--------------------------------------------------------|
| 1-2              | Connected to RT/SYNC PCB pad through a 22pF capacitor. |
| Not Installed*   | Not connected to RT/SYNC PCB pad                       |

* Default Position

## Electromagnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter.  The  EMI  filter  attenuates  high-frequency  cur -rents drawn by the switching power converter and limits the noise injected back into the input power source.

The  MAX17760AEVKIT#  EV  kit  PCB  has  designated footprints on the bottom side for placement of EMI filter components.  Use  of  these  filter  components  results  in lower  conducted  emissions  below  CISPR22  Class  B limits. Cut open the trace at L2 before installing conducted EMI  filter  components.  The  MAX17760AEVKIT#  EV  kit PCB layout is also designed to limit radiated emissions from switching nodes of the power converter, resulting in radiated emissions below CISPR22 Class B limits.

## MAX17760AEVKIT# Performance Report

(V IN  = 24V, V OUT = 5V, f SW  = 400kHz, T A = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17760AEVKIT# Performance Report (continued)

(V IN  = 24V, V OUT = 5V, f SW  = 400kHz, T A = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

RADIATEDEMISSIONSPLOT

<!-- image -->

## Component Suppliers

| SUPPLIER          | WEBSITE             |
|-------------------|---------------------|
| Murata Americas   | www.murata.com      |
| Panasonic Corp.   | www.panasonic.com   |
| TDK Corp.         | www.tdk.com         |
| SULLINS           | www.sullinscorp.com |
| Wurth Electronics | www.we-online.com   |
| Coilcraft         | www.coilcraft.com   |
| Taiyo Yuden       | www.ty-top.com      |
| Yageo             | www.yageo.com       |

Note: Indicate that you are using the MAX17760 when contacting these component suppliers.

## Evaluates: MAX17760 in 5V Output-Voltage Application

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17760AEVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX17760AEVKIT# Evaluation Kit

## MAX17760AEVKIT# EV Kit Bill of Materials

|   S. No. | DESIGNATOR   | DESCRIPTION                                                               |   QUANTITY | PART NUMBER                  |
|----------|--------------|---------------------------------------------------------------------------|------------|------------------------------|
|        1 | C1           | 22uF, 20%, 100V, Electrolytic capacitor                                   |          1 | PANASONIC EEE-TG2A220UP      |
|        2 | C2           | 1µF, 10%, 100V, X7R, Ceramic capacitor (1206)                             |          1 | TDK C3216X7R2A105K160AA      |
|        3 | C3,C14       | 0.1μF, 10%, 100V, X7R, Ceramic capacitor (0603)                           |          2 | YAGEO CC0603KRX7R0BB104      |
|        4 | C4, C13      | 220pF, 10%, 100V, C0G, Ceramic capacitor (0603)                           |          2 | KEMET C0603C221K1GAC         |
|        5 | C5           | 22pF, 5%, 50V, C0G, Ceramic capacitor (0402)                              |          1 | MURATA GCM1555C1H220JA16     |
|        6 | C6           | 5600pF, 10%, 25V, X7R, Ceramic capacitor (0402)                           |          1 | MURATA GRM155R71E562KA01     |
|        7 | C7           | 0.1uF, 10%, 50V, X7R, Ceramic capacitor (0402)                            |          1 | TDK C1005X7R1H104K050BE      |
|        8 | C8           | 1uF, 10%, 6.3V, X7R, Ceramic capacitor (0603)                             |          1 | MURATA GRM188R70J105KA01     |
|        9 | C9           | 10uF, 10%, 16V, X7R, Ceramic capacitor (0805)                             |          1 | MURATA GRM21BZ71C106KE15     |
|       10 | C11          | 0.1uF, 10%, 16V, X7R, Ceramic capacitor (0402)                            |          1 | TAIYO YUDEN EMK105B7104KV-F  |
|       11 | JU1          | 3-pin header                                                              |          1 | SULLINS PEC03SAAN            |
|       12 | JU2, JU3     | 2-pin header                                                              |          2 | SULLINS PEC02SAAN            |
|       13 | L1           | INDUCTOR, 56uH, 0.7A                                                      |          1 | WURTH 74408943560            |
|       14 | R1           | 649kΩ ±1%, 1/10W, resistor (0603)                                         |          1 | Any                          |
|       15 | R2           | 127kΩ ±1%, 1/10W, resistor (0603)                                         |          1 | Any                          |
|       16 | R3           | 95.3kΩ ±1%, 1/16W, resistor (0402)                                        |          1 | Any                          |
|       17 | R4           | 18.2kΩ ±1%, 1/16W, resistor (0402)                                        |          1 | Any                          |
|       18 | R5           | 69.8kΩ, ±1%, 1/16W, resistor (0402)                                       |          1 | Any                          |
|       19 | R6           | 10kΩ ±5%, 1/10W, resistor (0402)                                          |          1 | Any                          |
|       20 | R7           | 22Ω, ±5%, 1/16W, resistor (0402)                                          |          1 | Any                          |
|       21 |              | Shunts                                                                    |          3 | SULLINS STC02SYAN            |
|       22 | U1           | Buck Converter, MAX17760 (TDFN12-EP 3X3)                                  |          1 | MAXIM MAX17760ATC+           |
|       23 | MH1-MH4      | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON |          4 | KEYSTONE 9032                |
|       24 | C15          | OPTIONAL: 1μF, 10%, 100V, X7R, Ceramic capacitor (1206)                   |          1 | TAIYO YUDEN HMK316B7105KLH-T |
|       25 | C16          | OPTIONAL: 4.7μF, 10%, 100V, X7R, Ceramic capacitor (1206)                 |          1 | MURATA GRM31CZ72A475KE11     |
|       26 | L2           | OPTIONAL: INDUCTOR, 22µH, 0.28A (2mm x 2mm)                               |          1 | COILCRAFT XPL2010-223ML      |
|       27 | C10          | OPEN: Capacitor (0805)                                                    |          0 |                              |
|       28 | C12          | OPEN: Capacitor (0402)                                                    |          0 |                              |

| DEFAULT JUMPER TABLE   | DEFAULT JUMPER TABLE   |
|------------------------|------------------------|
| JUMPER                 | SHUNT POSITION         |
| JU1                    | 1-2                    |
| JU2                    | 1-2                    |
| JU3                    | 1                      |

Evaluates: MAX17760 in

5V Output-Voltage Application

## MAX17760AEVKIT# EV Kit Schematic

<!-- image -->

## MAX17760AEVKIT# Evaluation Kit

## MAX17760AEVKIT# EV Kit PCB Layout

MAX17760AEVKIT# EV Kit-Top Silkscreen

<!-- image -->

## Evaluates: MAX17760 in 5V Output-Voltage Application

MAX17760AEVKIT# EV Kit-Top Layer

<!-- image -->

MAX17760AEVKIT# EV Kit-Layer 2

<!-- image -->

## MAX17760AEVKIT# EV Kit PCB Layout (continued)

<!-- image -->

MAX17760AEVKIT# EV Kit-Layer 3

MAX17760AEVKIT# EV Kit-Bottom Layer

<!-- image -->

MAX17760AEVKIT# EV Kit-Bottom Silkscreen

<!-- image -->

## MAX17760AEVKIT# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/w.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX17760 in

5V Output-Voltage Application