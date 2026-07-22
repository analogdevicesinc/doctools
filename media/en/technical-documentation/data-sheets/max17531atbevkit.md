<!-- lastmod 2022-08-02 -->
## MAX17531 5V Output Evaluation Kit (TDFN)

## General Description

The MAX17531 5V evaluation kit (EV kit) (TDFN) is a fully assembled and tested circuit board that demonstrates the performance  of  the  MAX17531  42V,  50mA  ultra-small, high-efficiency, synchronous step-down DC-DC converter in  a  10-pin  TDFN  package.  The  EV  kit  operates  over a  wide  input  voltage  range  of  6V  to  42V  and  provides up  to  50mA  load  current  at  5V  output.  It  draws  only 26µA supply current under no-load conditions (EN/UVLO connected to V IN ). The EV kit is programmed to switch at a frequency of 300kHz. The device is simple to use and easily configurable with minimal external components. It features  cycle-by-cycle  peak  current-limit protection, undervoltage lockout, and thermal shutdown.

The EV kit comes installed with the MAX17531ATB+ in a  10-pin  (3mm  x  2mm)  lead(Pb)-free/RoHS-compliant TDFN package.

## Features

- 6V to 42V Input Voltage Range
- 5V Output, 50mA Continuous Current
- 26µA No-Load Supply Current
- EN/UVLO for On/Off Control and Programmable Input Undervoltage Lockout
- Programmable Switching Frequency
- Internal or Programmable Soft-Start
- PFM or Forced-PWM Mode of Operation
- Open-Drain RESET Output
- Peak Current-Limit Protection
- Thermal Shutdown
- Proven PCB Layout
- Fully Assembled and Tested

## Quick Start

## Recommended Equipment

- MAX17531 5V EV kit (TDFN)
- 42V adjustable, 0.5A DC power supply
- Electronic load up to 50mA
- Voltmeter

## Evaluates: MAX17531 (TDFN) in 5V Output Voltage Applications

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that shunts are installed on jumpers JU1, JU2 (EN/UVLO).
- 2) Verify that jumper JU3 (MODE-PFM operation) is open.
- 3) Set  the  electronic  load  to  constant-current  mode, 50mA, and disable the electronic load.
- 4) Connect the electronic load's positive terminal to the VOUT PCB pad. Connect  the  negative  terminal  to the GND PCB pad.
- 5) Connect the  voltmeter  across  the  VOUT  and  GND PCB pads.
- 6) Set  the  power-supply  output  to  24V.  Disable  the power supply.
- 7) Connect  the  power-supply  output  to  the  VIN  PCB pad.  Connect  the  supply  ground  to  the  GND  PCB pad.
- 8) Turn on the power supply.
- 9) Enable the electronic load and verify that output voltage is 5V with respect to GND.
- 10)  Vary the input voltage from 6V to 42V.
- 11)  Vary the load current from 1mA to 50mA and verify that output voltage is 5V with respect to GND.

Note: While  performing  an  output  short-circuit  test,  it  is possible for the ceramic output capacitor to oscillate with the  wiring  inductance  between  the  capacitor  and  shortcircuited load, and thereby cause the absolute maximum rating  of  the  V OUT   pin  (-0.3V)  to  be  exceeded.  The resistor (R7) and the capacitor (C5) are included on this evaluation kit to protect against unintentional violation of the above mentioned rating. In the actual system design, parasitic board or wiring inductance should be minimized and  the  output-voltage  waveform  under  short-circuit operation should be verified to ensure that the absolute maximum rating of the V OUT  pin is not exceeded.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX17531 5V Output Evaluation Kit (TDFN)

## Detailed Description

The MAX17531 5V EV kit (TDFN) is a fully assembled and tested  circuit  board  that  demonstrates  the  performance of  the  MAX17531 42V, 50mA ultra-small, high-efficiency, synchronous  step-down  DC-DC  converter  in  a  10-pin TDFN  package.  The  EV  kit  operates  over  a  wide  input voltage range of 6V to 42V and provides up to 50mA load current  at  5V  output.  It  draws  only  26µA  supply  current under no-load conditions (EN/UVLO connected to VIN). The EV kit is programmed to switch at a frequency of 300kHz. The device is simple to use and easily configurable with minimal external components. It features cycle-by-cycle peak current-limit protection, undervoltage lockout, and thermal shutdown.

The EV kit includes an EN/UVLO PCB pad and jumpers JU1 and JU2 to enable control of the converter output. The  MODE  PCB  pad  and  jumper  JU3  are  provided for  selecting  the  mode  of  operation  of  the  converter.  A RESET PCB pad is available for monitoring the RESET output. The RT/SYNC PCB pad can be used to synchronize the EV kit switching frequency to an external clock frequency.

## Enable Control (JU1, JU2)

The EN/UVLO pin on the EV kit serves as an on/off control while  also  allowing  the  user  to  program  the  input  undervoltage-lockout (UVLO) threshold. Jumpers JU1 and JU2 configure  the  EV  kit's  output  for  turn-on/turn-off  control. See Table 1 for proper JU1, JU2 jumper configurations.

Additionally, resistors R1 and R2 are included to set the UVLO to a desired turn-on voltage. Refer to the Setting the  Input  Undervoltage-Lockout  Level section  in the MAX17531  IC  data  sheet  for  additional  information  on setting the UVLO threshold voltage.

## Table 1. Enable Control (EN/UVLO) (JU1, JU2)

| SHUNT POSITION   | SHUNT POSITION   |                                                  |                     |
|------------------|------------------|--------------------------------------------------|---------------------|
| JU1              | JU2              | EN/UVLO PIN                                      | VOUT OUTPUT         |
| 1-2              | Open             | Connected to VIN                                 | Enabled             |
| Open             | 1-2              | Connected to GND                                 | Disabled            |
| 1-2*             | 1-2              | Connected to midpoint of R1, R2 resistor-divider | Enabled at VIN ≥ 6V |

* Default position.

## Table 2. MODE Control (JU3)

| SHUNT POSITION   | MODE PIN         | MODE OF OPERATION   |
|------------------|------------------|---------------------|
| 1-2              | Connected to GND | Forced PWM          |
| Open*            | Unconnected      | PFM                 |

* Default position.

## Evaluates: MAX17531 (TDFN) in 5V Output Voltage Applications

## RESET Output

The EV kit provides a PCB pad to monitor the status of the RESET output. RESET goes  high  when  the  output voltage  rises  above  95%  (typ)  of  its  nominal  regulated output voltage. RESET goes low when output voltage falls below 92% (typ) of its nominal regulated voltage.

## PFM or Forced-PWM Mode (MODE)

The EV kit includes a jumper (JU3) to select the mode of operation of the converter. Install a shunt across JU3 before powering up the EV kit to enable the forced-PWM operation. Keep JU3 open to enable the light-load PFM operation. See Table 2 for proper JU3 settings.

## Soft-Start

The  EV  kit  offers  a  fixed  5ms  soft-start  time.  Connect capacitor  C4  to  adjust  the  soft-start  time  (t SS ).  The minimum soft-start time is related to the output capacitance (C OUT ) and the output voltage (V OUT ) by the following equation.

<!-- formula-not-decoded -->

where t SS  is in milliseconds and C OUT  is in µF.

Use  the  following  equation  to  determine  the  soft-start capacitance value (C SS ):

<!-- formula-not-decoded -->

where t SS  is in milliseconds and C SS  is in nanofarads.

## External Synchronization (RT/SYNC)

The EV kit provides a PCB pad to synchronize the EV kit switching frequency to an external clock frequency. Refer to the External Synchronization section in the MAX17531 IC data sheet for additional information on configuring the external clock.

## MAX17531 5V Output Evaluation Kit (TDFN)

## EV Kit Performance Report

100

EFFICIENCY vs. LOAD CURRENT

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

4.983

4.981

4.979

4.977

4.975

4.973

toc1

= 36V

V IN

= 24V

V IN

V IN

= 12V

V IN

= 12V

10

0

PWM MODE

20

30

40

LOAD CURRENT (mA)

toc7 LOAD TRANSIENT RESPONSE PWM MODE (LOAD CURRENT STEPPED FROM NO LOAD TO 25mA)

50mV/div

20mA/div

50

EFFICIENCY (%)

OUTPUT VOLTAGE (V)

VOUT

(AC)

I OUT

1

100µs/div PFM MODE

10

LOAD CURRENT (mA)

OUTPUT VOLTAGE

vs. LOAD CURRENT

toc4

V IN

V IN

=

= 24V

36V

V

EFFICIENCY (%)

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

V OUT

(AC)

I

OUT

V EN/UVLO

V OUT

I

OUT

RESET

0

EFFICIENCY vs. LOAD CURRENT

V IN

toc2

= 12V

V IN

= 36V

= 24V

10

PWM MODE

20

30

40

LOAD CURRENT (mA)

LOAD TRANSIENT RESPONSE,

PFM MODE (LOAD CURRENT STEPPED

FROM 2mA to 27mA)

100mV/div

20mA/div

5V/div

2V/div

20mA/div

5V/div

toc5

toc8

V IN

200µs/div

SOFT-START

1ms/div

## Evaluates: MAX17531 (TDFN) in 5V Output V oltage Aplications

OUTPUT VOLTAGE

vs. LOAD CURRENT

toc3

PFM MODE

V IN

= 36V

V IN

20

0

= 12V

10

30

= 24V

40

50

LOAD CURRENT (mA)

<!-- image -->

40- BODE PLOT

30

20-

10-

0

-10-

-20-

-30+

103

PHASE

GAIN

f

CR

= 16.3kHz,

PHASE MARGIN = 58°

104

FREQUENCY(Hz)

toc9

-100

50

FIGURE6

APPLICATION

CIRCUIT

VOUT =5V

50

GAIN (dB)

OUTPUT VOLTAGE (V)

5.11

5.08

5.05

5.02

4.99

4.96

V IN

PHASE (º)

-50

-100

105

│

## MAX17531 5V Output Evaluation Kit (TDFN)

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| Coilcraft, Inc. | www.coilcraft.com |
| Murata Americas | www.murata.com    |
| Panasonic Corp. | www.panasonic.com |

Note: Indicate that you are using the MAX17531ATB when contacting these component suppliers.

## Component List and Schematic

See  the  following  links  for  component  information  and schematics:

- MAX17531EV TDFN BOM
- MAX17531EV TDFN Schematic

Evaluates: MAX17531 (TDFN) in

5V Output Voltage Applications

│

## MAX17531 5V Output Evaluation Kit (TDFN)

Figure 1. MAX17531 5V EV Kit (TDFN) Component Placement Guide-Component Side

<!-- image -->

## Evaluates: MAX17531 (TDFN) in 5V Output Voltage Applications

Figure 2. MAX17531 5V EV Kit (TDFN) PCB LayoutComponent Side

<!-- image -->

Figure 3. MAX17531 5V EV Kit (TDFN) PCB LayoutSolder Side

<!-- image -->

│

## Ordering Information

| PART              | TYPE   |
|-------------------|--------|
| MAX17531ATBEVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX17531 (TDFN) in

5V Output Voltage Applications

## MAX17531 5V Output Evaluation Kit (TDFN)

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses aUe LPSlLed  0a[LP InteJUated UeVeUYeV tKe ULJKt tR FKanJe tKe FLUFXLtU\ and VSeFL¿FatLRnV ZLtKRXt nRtLFe at an\ tL

│

Evaluates: MAX17531 (TDFN) in

5V Output Voltage Applications

<!-- image -->

<!-- image -->

<!-- image -->