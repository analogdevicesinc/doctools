<!-- lastmod 2022-08-02 -->
## MAX17632B Evaluation Kit

## General Description

The  MAX17632B  5V  output  evaluation  kit  (EV  kit)  provides a proven design to evaluate the MAX17632B highefficiency, synchronous step-down DC-DC converter. The EV kit provides 5V/2A at the output from a 6.5V to 36V input  supply.  The  switching  frequency  of  the  EV  kit  is preset to 400kHz for optimum efficiency and component size.  The  EV  kit  features  adjustable  input  undervoltage lockout,  adjustable  soft-start,  open-drain RESET signal, and external frequency synchronization.

## Features

- Operates from a 6.5V to 36V Input Supply
- 5V Output Voltage
- Delivers Up to 2A Output Current
- 400kHz Switching Frequency
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Adjustable Soft-Start Time
- Open-Drain RESET Output
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Evaluates: MAX17632 5V Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX17632B 5V output EV kit
- 6.5V to 36V, 2A DC-input power supply
- Load capable of sinking 2A
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation. Caution: Do not turn on power supply until all connections are completed.

- 1) Set the power supply at a voltage between 6.5V and 36V. Then, disable the power supply.
- 2) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive ter -minal of the 2A load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3) Connect the DVM across the VOUT PCB pad and the nearest PGND PCB pad.
- 4) Verify that shunts are installed across pins 1-2 on jumper JU1 (see Table 1 for details) and pins 2-3 on jumper JU2 (see Table 2 for details)
- 5) Turn on the DC power supply.
- 6) Enable the load.
- 7) Verify that the DVM displays 5V.

<!-- image -->

## Detailed Description of Hardware

The EV kit is designed to deliver 5V at load current up to 2A at the output from a 6.5V to 36V input supply. The switching frequency of the EV kit is configured at 400 kHz by leaving RT resistor open.

The EV kit includes an EN/UVLO PCB pad and jumper JU1 to enable the output at a desired input voltage. The MODE/SYNC PCB pad and jumper JU2 allow an external clock to synchronize the device. Jumper JU2 allows the selection  of  the  mode  of  operation  based  on  light  loadperformance  requirements.  An  additional RESET PCB pad  is  available  for  monitoring  whether  the  converter output is in regulation or not.

## Soft-Start Input (SS)

The  device  utilizes  an  adjustable  soft-start  function  to limit inrush current during the startup. The soft-start time is adjusted by the value of C3, the external capacitor from SS  to  SGND.  The  selected  output  capacitance  (C SEL ) and  the  output  voltage  (V OUT )  determine  the  minimum value of C3, as shown by the following equation:

<!-- formula-not-decoded -->

The soft-start time (t SS) is related to the soft-start capaci -tor C3 by the following equation:

<!-- formula-not-decoded -->

## Table 1. Regulator Enable (EN/UVLO) Description (JU1)

| SHUNT POSITION   | EN/UVLO PIN                                                | MAX17632B OUTPUT                                                        |
|------------------|------------------------------------------------------------|-------------------------------------------------------------------------|
| 1-2*             | Connected to VIN                                           | Enabled                                                                 |
| Not installed    | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level is set by the resistor-divider between VIN and SGND |
| 2-3              | Connected to SGND                                          | Disabled                                                                |

* Default position.

## Evaluates: MAX17632 5V Output-Voltage Application

For example, in order to program a 1ms soft-start time, C3 should be 5600pF.

## Setting the Input Undervoltage Lockout Level (EN/UVLO)

The device offers an adjustable input undervoltage-lockout level,  where  output  is  enabled  at  the  minimum  desired input-voltage  level.  For  always-enable  operation,  a  shunt should be installed across pins 1-2 on jumper JU1, which pulls up the EN/UVLO to V IN . In order to disable the output, install  a  shunt  across pins 2-3 on JU1, which pulls down the EN/UVLO pin to V SGND . See Table 1 for JU1 settings.

Set  the  input  voltage  level  (input  undervoltage-lockout level)  at  which  the  device  turns  on  with  the  resistive voltage-divider  R1  and  R2  connected between VIN and SGND.

Choose R1 to be 3.32MΩ and then calculate R2 as follows:

<!-- formula-not-decoded -->

where V INU  is the input voltage at that the device requires to turn on.

## MAX17632B Evaluation Kit

## Mode Selection (MODE/SYNC)

The  device's  MODE/SYNC  pin  can  be  used  to  select among forced PWM, DCM, or PFM modes of operation at light loads. The logic state of the MODE/SYNC pin is latched  when  V CC   and  EN/UVLO  voltages  exceed  the respective UVLO rising thresholds and all internal voltag -es are ready to allow LX switching. State changes on the MODE/SYNC  pin  are  ignored  during  normal  operation. Refer to the MAX17632 IC datasheet for more information on the PWM, DCM, and PFM modes of operation.

Table 2 shows the EV kit jumper (JU2) settings that can be  used  to  configure  the  desired  mode  of  operation  at light loads.

## Inductor Selection

Three  key  inductor  parameters  must  be  specified  for operation with the device: inductance value (L), inductor saturation current (I SAT ) and DC resistance (R DCR ). The switching  frequency  and  output  voltage  determine  the inductor value as follows:

## Table 2. MODE/SYNC Description (JU2)

| SHUNT POSITION   | MODE/SYNC PIN     | MAX17632B OUTPUT      |
|------------------|-------------------|-----------------------|
| 1-2              | Connected to V CC | DCM mode of operation |
| 2-3*             | Connected to SGND | PWM mode of operation |
| Not installed    | Unconnected       | PFM mode of operation |

* Default position.

## Evaluates: MAX17632 5V Output-Voltage Application

<!-- formula-not-decoded -->

where V OUT and f SW are nominal values. For example, for  5V  output  and  400kHz,  L  =  10µH  (part  number: XAL5050-103ME)  for  PWM/DCM  mode,  and  L  =  15µH (part number: XAL6060-153ME) for PFM mode are used in this EV kit.

## External Clock Synchronization (MODE/SYNC)

The internal oscillator of the device can be synchronized to an external clock signal on the MODE/SYNC pin. The external  clock  frequency  must  be  between  1.1  ×  f SW and 1.4 × f SW , where f SW   is the frequency of operation set by R5. The minimum external clock high pulse width should be greater than 50ns and minimum external low pulse width should be greater than 160ns. Make sure that a shunt is not installed on jumper JU2 while connecting the external clock signal on the MODE/SYNC PCB pad.

## MAX17632B EV Kit Performance Report

(V IN  = 24V, L = 10µH (XAL5050-103ME) for PWM/DCM mode, 15µH (XAL6060-153ME) for PFM mode, unless otherwise noted.)

EFFICIENCY vs. LOAD CURRENT

V IN

= 24V

V IN

V IN

= 36V

V IN

= 6.5V

0.5

0.0

1.0

1.5

LOAD CURRENT (A)

CONDITIONS:5V OUTPUT, PWM MODE, f SW

= 400kHz

LOAD AND LINE REGULATION

toc04

V IN

V IN

= 36V

= 12V

= 6.5V

0.5

V IN

0.0

V IN

= 24V

1.0

1.5

LOAD CURRENT (A)

CONDITIONS: 5V OUTPUT, PWM MODE, f SW

2.0

= 400kHz

SOFT-START/SHUTDOWN FROM EN/UVLO

toc07

= 12V

EFFICIENCY vs. LOAD CURRENT

toc02

V IN

V IN

= 24V

= 36V

1

0.01

V IN

V IN

= 6.5V

0.1

LOAD CURRENT (A)

CONDITIONS: 5V OUTPUT, DCM MODE, f SW = 400kHz

LOAD AND LINE REGULATION

toc05

EFFICIENCY vs. LOAD CURRENT

V IN

= 36V

V IN

= 24V

EFFICIENCY (%)

OUTPUT  VOLTAGE  (V)

VEN/UVLO

VOUT

I

LX

RESET

V

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

5.02

5.01

5.00

4.99

4.98

1ms/div

CONDITIONS: 5V OUTPUT,

PWM MODE, 2A LOAD, f SW

= 400kHz toc01

2.0

5V/div

2V/div

2A/div

5V/div EFFICIENCY (%)

OUTPUT  VOLTAGE  (V)

V

100

90

80

70

60

50

40

30

5.02

5.01

5.00

4.99

4.98

VEN/UVLO

VOUT

I

LX

RESET

V IN

0.0

0.5

V IN

V IN

= 12V

= 36V

= 6.5V

V IN

= 24V

1.0

1.5

LOAD CURRENT (A)

CONDITIONS: 5V OUTPUT, DCM MODE, f

2.0

SW = 400kHz

SOFT-START WITH PRE-BIAS VOLTAGE OF 2.5V

toc08

= 12V

1ms/div

CONDITIONS: 5V OUTPUT,

PWM MODE, 20mA LOAD, f SW

= 400kHz

5V/div

2V/div

1A/div

5V/div EFFICIENCY (%)

OUTPUT  VOLTAGE  (V)

100

90

80

70

60

50

40

30

20

0.001

V IN

= 12V

= 6.5V

0.01

0.1

LOAD CURRENT (A)

CONDITIONS: 5V OUTPUT, PFM MODE, f SW

= 400kHz

LOAD AND LINE REGULATION

V IN

toc06

= 6.5V

V IN

0.5

0.0

= 12V

V IN

= 24V

V IN

= 36V

1.0

1.5

2.0

LOAD CURRENT (A)

CONDITIONS: 5V OUTPUT, PFM MODE, f SW = 400kHz

<!-- image -->

5.20

5.15

5.10

5.05

5.00

4.95

4.90

4.85

4.80

V IN

toc03

1

## MAX17632B EV Kit Performance Report (continued)

(V IN  = 24V, L = 10µH (XAL5050-103ME) for PWM/DCM mode, 15µH (XAL6060-153ME) for PFM mode, unless otherwise noted.)

<!-- image -->

VLX

VOUT(AC)

I

LX

<!-- image -->

<!-- image -->

STEADY STATE

40µs/div

CONDITIONS: 5V OUTPUT,

PFM MODE, 20mA LOAD, f SW

= 400kHz LOAD TRANSIENT BETWEEN 0A AND 1A

toc12

toc11

20V/div

100mV/div

0.5A/div VOUT(AC)

I OUT

100µs/div

CONDITIONS: 5V OUTPUT,

PWM MODE, f SW

= 400kHz

<!-- image -->

<!-- image -->

100mV/div

0.5A/div

## Component Suppliers

| SUPPLIER       | WEBSITE             |
|----------------|---------------------|
| Coilcraft      | www.coilcraft.com   |
| MurataAmericas | www.murata.com      |
| Panasonic      | www.panasonic.com   |
| Vishay Dale    | www.vishay.com      |
| TDK Corp.      | www.tdk.com         |
| SullinsCorp    | www.sullinscorp.com |

Note: Indicate that you are using the MAX17632B when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17632BEVKIT# | EVKIT  |

## MAX17632B EV System Bill of Materials

| JUMPER TABLE   | JUMPER TABLE   |
|----------------|----------------|
| JUMPER         | SHUNT POSITION |
| JU1            | 1, 2 short     |
| JU2            | 2, 3 short     |

Evaluates: MAX17632

5V Output-Voltage Application

## MAX17632B EV System Schematic

<!-- image -->

## MAX17632B EV System PCB Layout

MAX17632B 5V EV Kit-Top Silkscreen

<!-- image -->

MAX17632B 5V EV Kit-Top Layer

<!-- image -->

## MAX17632B EV System PCB Layout (continued)

MAX17632B 5V EV Kit-Layer 2

<!-- image -->

MAX17632B 5V EV Kit-Layer 3

<!-- image -->

## MAX17632B EV System PCB Layout (continued)

MAX17632B 5V EV Kit-Bottom Layer

<!-- image -->

## MAX17632B Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/17           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX17632

5V Output-Voltage Application