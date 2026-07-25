<!-- lastmod 2022-08-02 -->
## MAX17524 Dual Output Evaluation Kit

## General Description

The MAX17524 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX17524  high-efficiency,  highvoltage,  synchronous step-down dual DC-DC converter. The EV kit is preset to generate 3.3V and 5V output volt -ages, at load currents up to 3A per converter and features a 450kHz switching frequency for optimum efficiency and component  size.  The  EV  kit  features  adjustable  input undervoltage  lockout,  adjustable  soft-start,  open-drain RESET signal, and external frequency synchronization.

## Features

- Operates from a 6.5V to 60V Input Supply
- Dual Output Voltage: 3.3V and 5V
- Up to 3A Output Current Per Converter
- 450kHz Switching Frequency
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- MODE/SYNC Pin to Select Among PWM, PFM, or DCM Modes
- Open-Drain RESET Output
- External Frequency Synchronization
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX17524 Dual-Output

Voltage 3.3V and 5V Application

## Quick Start

## Recommended Equipment

- MAX17524EVKIT#
- 6.5V to 60V, 5A DC-input power supply
- Two loads capable of sinking 3A
- Two digital voltmeters (DVM)

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation. Caution: Do not turn on power supply until all connections are completed.

- 1) Set the power supply at a voltage between 6.5V and 60V. Disable the power supply.
- 2) Connect  the  positive  terminal  of  the  power  supply to  the  VIN1  PCB  pad  and  the  negative  terminal  to the nearest PGND1 PCB pad. Connect the positive terminal of the 3A load to the VOUT1 PCB pad and the negative terminal to the nearest PGND1 PCB pad. Connect the positive terminal of the other 3A load to the VOUT2 PCB pad and the negative terminal to the nearest PGND2 PCB pad.
- 3) Connect the DVMs across the VOUT1 PCB pad and the nearest PGND1 PCB pad, and across the VOUT2 PCB pad and the nearest PGND2 PCB pad.
- 4) Verify  that  shunts  are  installed  across  pins  1-2  on jumper JU4 and pins 1-2 on JU5 (see Table 1 and 2 ).
- 5) Select  the  shunt  position  on  jumper  JU1  and  JU2 according  to  the  intended  mode  of  operation  (see Table 3 and 4 ).
- 6) Verify that the shunt is connected across pins 1-2 on jumper JU3 (see Table 5 for details).
- 7) Turn on the DC power supply.
- 8) Enable the loads.
- 9) Verify that the DVMs display 3.3V and 5V.

<!-- image -->

## MAX17524 Dual Output Evaluation Kit

## Detailed Description

The  MAX17524  EV  kit  provides  a  proven  design  to evaluate  the  MAX17524  high-efficiency,  high-voltage, synchronous step-down Dual DC-DC converter. The EV kit generates a fixed 3.3V and 5V, at load currents up to 3A per channel, from a 6.5V to 60V input supply. The EV kit  features a 450kHz fixed switching frequency for opti -mum efficiency and component size.

This EV kit includes an EN/UVLO PCB pad and JU4, JU5 to enable the two outputs at a desired input voltage. The MODE/SYNC1  PCB  pad  and  JU1,  and  MODE/SYNC2 PCB pad and JU2 allow an external clock to synchronize the  respective  channels.  The  EV  kit  features  individual mode-of-operation selector pins, adjustable input under -voltage  lockout  (EN/UVLO)  pins,  adjustable  soft-start pins, open-drain RESET signals for each output channel.

## Soft-Start Input (SS)

The  device  implements  adjustable  soft-start  operation for  each  output  to  reduce  inrush  current.  Capacitors connected  from  the  SS  pins  to  SGND  (C SS )  programs the  soft-start  time  for  the  corresponding  output  voltage. The selected output capacitance (C SEL )  and  the  output voltage (V OUT ) determine the minimum required soft-start capacitor as follows:

<!-- formula-not-decoded -->

The  soft-start time  (t SS ) is  related  to  the  capacitor connected at SS (C SS ) by the following Equation:

<!-- formula-not-decoded -->

For  example,  to  program  a  1ms  soft-start  time  on  one channel, a 5.6nF capacitor should be connected from the corresponding SS pin to SGND.

Figure 1. Setting the Input Undervoltage Lockout

<!-- image -->

## Evaluates: MAX17524 Dual-Output Voltage 3.3V and 5V Application

## Setting the Input Enable/UndervoltageLockout Level (EN/UVLO1, EN/UVLO2)

The  device  offers  an  adjustable  input  undervoltagelockout  level  for  each  output.  Set  the  voltage  at  which each  converter  turns  on  with  a  resistive  voltage-divider connected from V IN\_  to SGND. Connect the center node of the divider to EN/UVLO pins as shown in Figure 1.

Choose RTOP\_ to be 3.3MΩ, and then calculate R BOT\_ as:

<!-- formula-not-decoded -->

Where  V INU\_   is  the  input  voltage  at  which  the  desired converter is required to turn on. Install a shunt across pins 1-2 on JU4 and JU5 to enable the EV kit outputs and for always on operation. See Table 1 and Table 2 for proper jumper settings.

## Table 1. Regulator Enable (EN/UVLO1) Description (JU4)

| SHUNT POSITION   | EN/UVLO1 PIN                                               | MAX17524_ OUTPUT1                                       |
|------------------|------------------------------------------------------------|---------------------------------------------------------|
| 1-2*             | Connected to V IN1                                         | Enabled                                                 |
| Not installed    | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistors |
| 2-3              | Connected to SGND                                          | Disabled                                                |

## Table 2. Regulator Enable (EN/UVLO2) Description (JU5)

| SHUNT POSITION   | EN/UVLO2 PIN                                               | MAX17524_ OUTPUT2                                       |
|------------------|------------------------------------------------------------|---------------------------------------------------------|
| 1-2*             | Connected to V IN2                                         | Enabled                                                 |
| Not installed    | Connected to the center node of resistor-divider R3 and R4 | Enabled, UVLO level set through the R3 and R4 resistors |
| 2-3              | Connected to SGND                                          | Disabled                                                |

## MAX17524 Dual Output Evaluation Kit

## MODE Selection and External Synchronization (MODE/SYNC1, MODE/SYNC2)

The  device's  MODE/SYNC  pins  can  be  used  to  select among  PWM,  PFM,  or  DCM  modes  of  operation  for each output. The logic state of the MODE pin is latched when VCC and EN/UVLO voltages exceed the respec -tive UVLO rising thresholds and all internal voltages are ready to allow LX switching. State changes on the MODE pin  are  ignored  during  normal  operation.  Refer  to  the MAX17524 IC data sheet for more information on PWM, PFM, and DCM modes of operation.

## Table 3. MODE/SYNC1 Description (JU1)

| SHUNT POSITION   | MODE/ SYNC1 PIN   | MAX17524_ MODE1       |
|------------------|-------------------|-----------------------|
| Not installed    | Unconnected       | PFM mode of operation |
| 1-2*             | Connected to SGND | PWM mode of operation |
| 2-3              | Connected to V CC | DCM mode of operation |

* Default position

## Table 5. VIN2 Connection (JU3)

| SHUNT POSITION   | V IN2 PIN                 | MAX17524_ OUTPUT      |
|------------------|---------------------------|-----------------------|
| Not installed    | Not powered up from V IN1 | No output at V OUT2   |
| 1-2*             | Powered up from V IN1     | 3.3V Output at V OUT2 |

* Default position

## Evaluates: MAX17524 Dual-Output Voltage 3.3V and 5V Application

Table 3 and Table 4 show EV kit jumper settings that can be used to configure the desired mode of operation.

The internal clock of each converter can be synchronized to  an  external  clock  signal  on  the  MODE/SYNC1  and MODE/SYNC2 pins. The external synchronization clock frequency  must  be  between  1.1  ×  f SW   and  1.4  ×  f SW , where f SW  is  the  frequency  of  operation  set  by  resistor (R11)  connected  to  the  RT  pin.  The  minimum  external clock high pulse width should be greater than 50ns and the  minimum  external  clock  low  pulse  width  should  be greater than 160ns.

## Table 4. MODE/SYNC2 Description (JU2)

| SHUNT POSITION   | MODE/ SYNC2 PIN   | MAX17524_ MODE2       |
|------------------|-------------------|-----------------------|
| Not installed    | Unconnected       | PFM mode of operation |
| 1-2*             | Connected to SGND | PWM mode of operation |
| 2-3              | Connected to V CC | DCM mode of operation |

## MAX17524 Dual Output Evaluation Kit

## MAX17524 EV Kit Performance Report

(V IN1 = V IN2  = 24V, T A = +25°C, unless otherwise noted.)

MAX17524, 5V OUTPUT

LOAD AND LINE REGULATION

(PWM MODE, fSW = 450kHz)

toc01

V IN

V IN

= 12V

V IN

= 36V

= 6.5V

V IN

= 24V

1

2

LOAD CURRENT (A)

MAX17524, 5V OUTPUT

EFFICIENCY vs. LOAD CURRENT

(PFM MODE, fSW = 450kHz)

V IN

V IN

= 36V

= 48V

V IN

= 12V

= 24V

V IN

= 60V

1.00

V IN

V IN

3.34

3.33

3.32

3.31

3.30

3.29

= 6.5V

0.10

LOAD CURRENT (A)

MAX17524, 3.3V OUTPUT

LOAD AND LINE REGULATION

(PWM MODE, fSW = 450kHz)

V IN

= 12V

V IN

= 36V

V IN

= 4.5V

V IN

= 24V

1

2

LOAD CURRENT (A)

V IN

0

MAX17524, 5V OUTPUT

EFFICIENCY vs. LOAD CURRENT

(PWM MODE, fSW = 450kHz)

V IN

= 36V

V IN

= 48V

V IN

= 12V

1

2

3

LOAD CURRENT (A)

<!-- image -->

toc07

= 60V

= 48V

= 24V

V IN

= 60V

V IN

= 60V

= 48V

OUTPUT  VOLTAGE  (V)

EFFICIENCY (%)

4.99

4.98

4.97

4.96

4.95

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

0

V IN

0.01

OUTPUT  VOLTAGE  (V)

0

V IN

3

toc04

EFFICIENCY (%)

3

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

V IN

V IN

= 6.5V

## Evaluates: MAX17524 Dual-Output Voltage 3.3V and 5V Application

MAX17524, 5V OUTPUT

LOAD AND LINE REGULATION

(PFM MODE, fSW = 450kHz)

V IN

= 6.5V

V IN

= 12V

V IN

= 24V

V IN

= 36V

V IN

= 48V

V IN

= 60V

1

2

LOAD CURRENT (A)

MAX17524, 5V OUTPUT

EFFICIENCY vs. LOAD CURRENT

(DCM MODE, fSW = 450kHz)

toc06

V IN

V IN

V IN

= 60V

= 48V

= 36V

= 24V

toc02

EFFICIENCY(%)

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

0

OUTPUT  VOLTAGE  (V)

V IN

EFFICIENCY (%)

5.14

5.10

5.06

5.02

4.98

4.94

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

V IN

V IN

= 36V

V IN

= 48V

V IN

= 24V

= 12V

= 4.5V

1

2

LOAD CURRENT (A)

0

0.01

V IN

V IN

= 12V

= 6.5V

0.10

LOAD CURRENT (A)

MAX17524, 3.3V OUTPUT

EFFICIENCY vs. LOAD CURRENT

(PWM MODE, fSW = 450kHz)

toc08

V IN

V IN

= 60V

3

1.00

toc03

3

## MAX17524 EV Kit Performance Report (continued)

(V IN1 = V IN2  = 24V, T A = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

MAX17524, 5V OUTPUT LOAD TRANSIENT BETWEEN 1.5A AND 3A (fSW = 450kHz, PWM MODE)

<!-- image -->

## MAX17524 EV Kit Performance Report (continued)

(V IN1 = V IN2  = 24V, T A = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

## MAX17524 EV Kit Performance Report (continued)

(V IN1 = V IN2  = 24V, T A = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17524 EV Kit Performance Report (continued)

(V IN1 = V IN2  = 24V, T A = +25°C, unless otherwise noted.)

<!-- image -->

MAX17524, 5V OUTPUT SOFT-START/SHUTDOWN FROM EN/UVLO (fSW = 450kHz, PWM MODE, 3A LOAD)

<!-- image -->

<!-- image -->

<!-- image -->

MAX17524, 5V OUTPUT SOFT-START WITH PREBIAS VOLTAGE OF 2.5V (PWM MODE, 5mA LOAD, fSW = 450kHz)

<!-- image -->

<!-- image -->

## MAX17524 Dual Output Evaluation Kit

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17524EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX17524 EV Kit Bill of Materials

|   No. | Description                                    |   Quantity | Designator         | Part Number                      |
|-------|------------------------------------------------|------------|--------------------|----------------------------------|
|     1 | 47uF, 20%, 80V, Electrolytic capacitor         |          1 | C1                 | PANASONIC EEE-FK1K470P           |
|     2 | 2.2μF, 10%, 100V, X7R,Ceramic capacitor (1210) |          2 | C2, C5             | MURATA GRM32ER72A225KA35         |
|     3 | 0.1μF, 10%, 100V, X7R,Ceramic capacitor (0603) |          2 | C3, C4             | MURATA GRM188R72A104KA35         |
|     4 | 22μF, 10%, 10V, X7R,Ceramic capacitor (1210)   |          2 | C6, C18            | MURATA GRM32ER71A226K            |
|     5 | 47μF, 10%, 10V, X7R,Ceramic capacitor (1210)   |          2 | C7, C19            | MURATA GRM32ER71A476KE15         |
|     6 | 2.2μF, 10%, 10V, X7R,Ceramic capacitor (0603)  |          2 | C8, C9             | MURATA GRM188R71A225KE15         |
|     7 | 5600pF, 10%, 25V, X7R,Ceramic capacitor (0402) |          2 | C10, C11           | MURATA GRM155R71E562KA01         |
|     8 | 0.1μF, 10%, 16V, X7R,Ceramic capacitor (0402)  |          2 | C12, C13           | MURATA GRM155R71C104KA88         |
|     9 | 0.1μF, 10%, 50V, X7R,Ceramic capacitor (0402)  |          2 | C16, C17           | MURATA GRM155R71H104KE14         |
|    10 | 3-pin header (36-pin header 0.1' centers)      |          4 | JU1, JU2, JU4, JU5 | SULLINS PEC03SAAN                |
|    11 | 2-pin header (36-pin header 0.1' centers)      |          1 | JU3                | SULLINS PEC02SAAN                |
|    12 | INDUCTOR, 10μH, 7A                             |          1 | L1                 | COILCRAFT XAL6060-103ME          |
|    13 | INDUCTOR, 6.8μH, 9A                            |          1 | L2                 | COILCRAFT XAL6060-682ME          |
|    14 | MOSFET (80V, 30A)                              |          2 | Q1, Q2             | VISHAY SILICONIX SIS468DN-T1-GE3 |
|    15 | 3.32MΩ, ±1%, 1/10W, resistor (0603)            |          2 | R1, R3             | Any                              |
|    16 | 768kΩ, ±1%, 1/10W, resistor (0603)             |          2 | R2, R4             | Any                              |
|    17 | 140kΩ, ±1%, 1/10W, resistor (0402)             |          1 | R5                 | Any                              |
|    18 | 30.9kΩ, ±1%, 1/16W, resistor (0402)            |          1 | R6                 | Any                              |
|    19 | 100kΩ, ±1%, 1/16W, resistor (0402)             |          1 | R7                 | Any                              |
|    20 | 37.4kΩ, ±1%, 1/16W, resistor (0402)            |          1 | R8                 | Any                              |
|    21 | 10kΩ, ±1%, 1/16W, resistor (0402)              |          4 | R9, R10, R16, R17  | Any                              |
|    22 | 0Ω, ±5%, 1/16W, resistor (0402)                |          2 | R12, R13           | Any                              |
|    23 | 4.7Ω, ±1%, 1/16W, resistor (0402)              |          2 | R14, R15           | Any                              |
|    24 | Dual Buck Converter, MAX17524                  |          1 | U1                 | MAXIM MAX17524ATJ+               |

| Jumper Table            | Jumper Table   |
|-------------------------|----------------|
| Jumper                  | Shunt Position |
| JU1, JU2, JU3, JU4, JU5 | 1-2 Short      |

Evaluates: MAX17524 Dual-Output

Voltage 3.3V and 5V Application

## Component Suppliers

| SUPPLIER        | WEBSITE                |
|-----------------|------------------------|
| Coilcraft, Inc. | www.coilcraft.com      |
| MurataAmericas  | www.murataamericas.com |
| Panasonic Corp. | www.panasonic.com      |
| Vishay          | www.vishay.com         |

Note: Indicate that you are using the MAX17524 when contacting these component suppliers.

## MAX17524 EV Kit Schematic

<!-- image -->

## MAX17524 Dual Output Evaluation Kit

## MAX17524 EV Kit PCB Layout

MAX17524 EV Kit PCB-Top Silkscreen

<!-- image -->

MAX17524 EV Kit PCB-Top Layer

<!-- image -->

## MAX17524 EV Kit PCB Layout (continued)

MAX17524 EV Kit PCB-Layer 2

<!-- image -->

MAX17524 EV Kit PCB-Layer 3

<!-- image -->

## MAX17524 EV Kit PCB Layout (continued)

MAX17524 EV Kit PCB-Bottom Layer

<!-- image -->

## MAX17524 Dual Output Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/17           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX17524 Dual-Output

Voltage 3.3V and 5V Application