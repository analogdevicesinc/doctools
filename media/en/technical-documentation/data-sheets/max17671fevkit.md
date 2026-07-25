<!-- lastmod 2022-08-02 -->
## MAX17671FEVKIT# Evaluation Kit

## General Description

The MAX17671F evaluation kit (EV kit) is a fully assembled  and  tested  circuit  board  that  demonstrates  the performance  of  the  MAX17671F  dual-output  regulator integrating  a  high-efficiency,  high  voltage,  fixed  output voltage,  synchronous  step-down  DC-DC  converter,  and a  high-PSRR,  low-noise,  fixed-output  linear  regulator. The EV kit is designed for a high efficiency solution, and generates a 5V step-down converter output voltage and a  fixed  3.3V  linear  regulator  output  voltage  at  load  currents  up  to  150mA  and  50mA,  respectively.  When  the linear regulator output is loaded, the step-down converter output  current  is  reduced  by  I LDO ,  where  I LDO   is  the load  current  on  the  linear  regulator  output.  The  EV  kit draws only 70µA supply current under no-load conditions. The  step-down  converter  is  programmed  to  a  switching  frequency  of  200kHz  and  delivers  a  peak  efficiency of  90%  with  the  supplied  components.  The  dual-output device  is  simple  to  use  and  easily  configurable  with minimal external components. The EV kit features adjustable input undervoltage lockout, open-drain RESET signal,  hysteretic  peak  current-limit  protection  and  external frequency synchronization.

Evaluates: MAX17671 5V Step-Down Converter and 3.3V Linear Regulator Output Voltage Application

## Benefits and Features

- 6.5V to 60V Input-Voltage Range for the Step-Down Converter
- 5V Step-Down Converter Output Voltage, Up To 150mA Continuous Load Current
- 3.3V Linear Regulator Output Voltage, Up To 50mA Continuous Load Current
- Peak Efficiency of 90% for the Step-Down Converter
- 70µA No-Load Supply Current
- 200kHz Switching Frequency
- Internal Soft-Start
- EN/UVLO Input, Resistor-Programmable UVLO Threshold
- MODE/SYNC Pin to Select PWM or PFM Mode
- Open-Drain RESET Output to Monitor Dual Outputs
- External Frequency Synchronization
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX17671FEVKIT# Evaluation Kit

## Quick Start

## Required Equipment

- MAX17671FEVKIT#
- 6.5V to 60V, 200mA DC-input power supply
- Two loads capable of sinking 150mA and 50mA
- Two digital voltmeters (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Set the power supply at a voltage between 6.5V and 60V. Disable the power supply.
- 2) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest GND PCB pad. Connect the positive terminal of the 150mA load to the VOUT PCB pad and the negative terminal to the nearest GND PCB pad. Connect the positive terminal of the 50mA load to the OUTL PCB pad and the negative terminal to the nearest GND PCB pad.
- 3) Connect the DVMs across the VOUT PCB pad and the nearest GND PCB pad, and across the OUTL PCB pad and the nearest GND PCB pad.
- 4) Verify that the jumper JU1 is open (see Table 1).
- 5) Select the shunt position on the jumper JU2 according to the intended mode of operation (see Table 2).
- 6) Turn on the DC power supply.
- 7) Enable the loads. If linear regulator output is not loaded, step-down converter output can be loaded up to 150mA. Else, it can be loaded up to (150 I LDO)mA, where I LDO  is the load current on the linear regulator output in mA.
- 8) Verify that the DVMs display 5V and 3.3V.
- 9) Vary the input voltage from 6.5V to 60V, and vary the load currents on step-down converter and linear regulator outputs, and verify that the output voltages of step-down converter and linear regulator are 5V and 3.3V, respectively.

## Detailed Description

The MAX17671F evaluation kit (EV kit) is a fully assembled  and  tested  circuit  board  that  demonstrates  the performance  of  the  MAX17671F  dual-output  regulators integrating  a  high-efficiency,  high  voltage,  fixed  output voltage, synchronous step-down DC-DC converter, and a high-PSRR, low-noise, fixed output linear regulator. The step-down converter operates over a wide input range of

## Evaluates: MAX17671 5V Step-Down Converter and 3.3V Linear Regulator Output Voltage Application

6.5V to 60V and the input of the linear regulator is connected to the output of the step-down converter. The EV kit  is  designed for a high efficiency solution, and generates a 5V step-down converter output voltage and a fixed 3.3V linear regulator output voltage at load currents up to 150mA and 50mA, respectively. When the linear regulator output is loaded, the step-down converter output current is reduced by I LDO , where I LDO  is the load current on the linear regulator output. The EV kit draws only 70µA supply current under no-load conditions. The step-down converter is programmed to a switching frequency of 200kHz and delivers a peak efficiency of 90% with the supplied components. The dual-output device is simple to use and easily  configurable  with  minimal  external  components. The EV kit features adjustable-input undervoltage lockout, open-drain RESET signal,  hysteretic  peak  current-limit protection and external frequency synchronization.

This EV kit includes an EN/UVLO PCB pad and JU1 to enable the step-down converter output at a desired input voltage.  The  MODE/SYNC  PCB  pad  and  JU2  are  provided  for  selecting  the  intended  mode  of  operation  and to allow an external clock to synchronize the step-down converter. A RESET PCB pad is available for monitoring the RESET output.

## Setting the Input EN/UVLO Level

The device offers an adjustable-input undervoltage lockout  level.  Set  the  voltage  at  which  the  device  turns  on with a resistive voltage-divider connected from IN to GND. Connect the center node of the divider to EN/UVLO as shown  in  Figure  1 .  Choose  R1  to  be  3.3MΩ  and  then calculate R2 as follows:

<!-- formula-not-decoded -->

where  V INU   is  the  voltage  above  which  the  device  is required to turn on. The allowed minimum value of V INU is 4V. See Table 1 for proper jumper settings.

Figure 1. Setting the Input-Undervoltage Lockout

<!-- image -->

## MAX17671FEVKIT# Evaluation Kit

## MODE Selection and External Clock Synchronization (MODE/SYNC)

The  device  features  a  MODE/SYNC  pin  for  selecting either  forced  PWM  or  PFM  mode  of  operation.  If  the MODE/SYNC pin is grounded, the device operates in a constant-frequency PWM mode at all loads. If the MODE/ SYNC pin is unconnected, the device operates in PFM mode  at  light  loads.  Refer  to  the  MAX17671  IC  data sheet for more information on PWM and PFM modes of operation.

Table 2 shows the EV kit jumper settings that can be used to configure the desired mode of operation.

The  internal  oscillator  of  the  device  can  be  synchronized  to  an  external  clock  signal  on  the  MODE/SYNC pin.  The  external  synchronization  clock  frequency  must be between 1.1 x f SW  and 1.4 x f SW , where f SW  is the

## Evaluates: MAX17671 5V Step-Down Converter and 3.3V Linear Regulator Output Voltage Application

frequency  programmed  by  the  resistor  (R5)  connected to  the  RT  pin. The minimum external clock on-time and off-time  pulse-widths  should  be  greater  than  100ns.The jumper  JU2  must  be  unconnected  before  applying  the external clock at the MODE/SYNC pin.

## RESET Output

The  EV  kit  provides  a RESET PCB  pad  to  monitor  the step-down converter output voltage and the linear regulator output voltage. RESET goes to high impedance 2.1ms after  both  step-down  converter  and  linear  regulator  outputs rise above 95% of their nominal set value, if V INL  is above V INL\_UVLO  (2.18V typ) during startup. Otherwise, RESET only  considers  step-down  converter  output  voltage for its high impedance state. Refer to the MAX17671 IC data sheet for more information.

## Table 1. Step-Down Converter Enable (EN/UVLO) Description (JU1)

| SHUNT POSITION   | EN/UVLO PIN                                                | OUTPUT                                                  |
|------------------|------------------------------------------------------------|---------------------------------------------------------|
| Not installed*   | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistors |
| 1-2              | Connected to GND                                           | Disabled                                                |

*Default position.

## Table 2. MODE/SYNC Description (JU2)

| SHUNT POSITION   | MODE/SYNC PIN    | MODE                  |
|------------------|------------------|-----------------------|
| 1-2              | Connected to GND | PWM Mode of operation |
| Not installed*   | Unconnected      | PFM Mode of operation |

*Default position.

│

## MAX17671FEVKIT# Evaluation Kit

## MAX17671F EV Kit Performance Report

(V IN  = 24V, unless otherwise noted.)

<!-- image -->

## Evaluates: MAX17671 5V Step-Down Converter and 3.3V Linear Regulator Output Voltage Application

<!-- image -->

│

## MAX17671FEVKIT# Evaluation Kit

## Evaluates: MAX17671 5V Step-Down Converter and 3.3V Linear Regulator Output Voltage Application

## MAX17671F EV Kit Performance Report (continued)

(V IN  = 24V, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

GAIN (dB)

40

20

0

-20

-40

1k MAX17671F, 5V OUTPUT

CLOSED LOOP BODE PLOT

PHASE

GAIN

BANDWIDTH = 12.2kHz

PHASE MARGIN = 59.7°

10k

100

50

0

-50

-100

100k

FREQUENCY (Hz)

CONDITIONS: PWM MODE, f SW = 200kHz, 150mA LOAD

MAX17671F, 5V OUTPUT

STEADY STATE AT NO LOAD

VOUT(AC)

VLX

I LX

toc08

toc10

2µs/div

CONDITIONS: PWM MODE, f SW = 200kHz PHASE (°)

<!-- image -->

20mV/div

10V/div

100mA/div

│

## MAX17671FEVKIT# Evaluation Kit

## Evaluates: MAX17671 5V Step-Down Converter and 3.3V Linear Regulator Output Voltage Application

## MAX17671F EV Kit Performance Report (continued)

(V IN  = 24V, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

CONDITIONS: INL CONNECTED TO EXTERNAL SUPPLY

<!-- image -->

CONDITIONS: INL CONNECTED TO VOUT, PWM MODE

<!-- image -->

<!-- image -->

│

## MAX17671FEVKIT# Evaluation Kit

Evaluates: MAX17671 5V Step-Down Converter and 3.3V Linear Regulator Output Voltage Application

## MAX17671F EV Kit Performance Report (continued)

(V IN  = 24V, unless otherwise noted.)

<!-- image -->

<!-- image -->

## MAX17671F, 3.3V LINEAR REGULATOR LOAD TRANSIENT ON STEP-DOWN CONVERTER AND ITS EFFECT ON LINEAR REGULATOR OUPUT

<!-- image -->

│

## MAX17671FEVKIT# Evaluation Kit

## Component Suppliers

| SUPPLIER        | WEBSITE                |
|-----------------|------------------------|
| Coilcraft, Inc. | www.coilcraft.com      |
| Murata Americas | www.murataamericas.com |
| Panasonic Corp. | www.panasonic.com      |

Note: Indicate that you are using the MAX17671 when contact -ing these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17671FEVKIT# | EVKIT  |

│

## MAX17671F EV Kit System Bill of Materials

|   NO. | DESCRIPTION                                                       |   QUANTITY | DESIGNATOR   | PART NUMBER               |
|-------|-------------------------------------------------------------------|------------|--------------|---------------------------|
|     1 | 1μF, 10%, 100V, X7R,Ceramic capacitor (1206)                      |          1 | C1           | MURATA GRM31CR72A105KA01L |
|     2 | 2.2μF, 10%, 10V, X7R,Ceramic capacitor (0603)                     |          1 | C2           | MURATA GRM188R71A225KE15  |
|     3 | 10μF, 10%, 25V, X7R,Ceramic capacitor (0805)                      |          1 | C4           | MURATA GRM21BZ71E106KE15  |
|     4 | 22μF, 20%, 100V, Electrolytic capacitor                           |          1 | C5           | PANASONIC EEE-TG2A220UP   |
|     5 | 2-pin header (36-pin header 0.1' centers)                         |          2 | JU1, JU2     | SULLINS PEC02SAAN         |
|     6 | INDUCTOR, 220μH, 0.64A                                            |          1 | L1           | COILCRAFT LPS6235-224ML   |
|     7 | 3.32MΩ, ±1%, 1/10W, resistor (0402)                               |          1 | R1           | Any                       |
|     8 | 787kΩ, ±1%, 1/10W, resistor (0402)                                |          1 | R2           | Any                       |
|     9 | 0Ω, ±5%, 1/16W, resistor (0402)                                   |          2 | R3, R7       | Any                       |
|    10 | 274kΩ, ±1%, 1/10W, resistor (0402)                                |          1 | R5           | Any                       |
|    11 | 100kΩ, ±1%, 1/16W, resistor (0402)                                |          1 | R6           | Any                       |
|    12 | Integrated Step-down Converter with a Linear Regulator, MAX17671F |          1 | U1           | MAXIM MAX17671FATB+       |

| Jumper Table   | Jumper Table   |
|----------------|----------------|
| Jumper         | Shunt Position |
| JU1, JU2       | Open           |

## Evaluates: MAX17671 5V Step-Down Converter and 3.3V Linear Regulator Output Voltage Application

│

## MAX17671FEVKIT# Evaluation Kit

## MAX17671F EV Kit System Schematic

<!-- image -->

## Evaluates: MAX17671 5V Step-Down Converter and 3.3V Linear Regulator Output Voltage Application

## MAX17671FEVKIT# Evaluation Kit

## MAX17671F EV Kit System PCB Layout

MAX17671F EV Kit-Top Silkscreen

<!-- image -->

## Evaluates: MAX17671 5V Step-Down Converter and 3.3V Linear Regulator Output Voltage Application

MAX17671F EV Kit-Top Layer

<!-- image -->

MAX17671F EV Kit-Layer 2

<!-- image -->

│

## MAX17671FEVKIT# Evaluation Kit

## Evaluates: MAX17671 5V Step-Down Converter and 3.3V Linear Regulator Output Voltage Application

## MAX17671F EV Kit System PCB Layout (continued)

MAX17671F EV Kit-Layer 3

<!-- image -->

MAX17671F EV Kit-Bottom Layer

<!-- image -->

│

## MAX17671FEVKIT# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                          | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------|-----------------|
|                 0 | 7/18            | Initial release                      | -               |
|               0.1 |                 | Corrected missing overbar on RESET . | 1               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html .

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses aUe LPSOLed. Ma[LP ,nteJUated UeseUYes the ULJht to FhanJe the FLUFXLtU\ and sSeFL¿FatLons ZLthoXt notLFe at an\ tLPe.

│

Evaluates: MAX17671 5V Step-Down Converter and 3.3V Linear Regulator Output Voltage Application