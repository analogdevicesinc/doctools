<!-- lastmod 2022-10-10 -->
## MAX1751 5V Output Evaluation Kit (µMAX)

## General Description

The MAX17551 5V evaluation kit (EV kit) (µMAX) is a fully assembled and tested circuit board that demonstrates the performance  of  the  MAX17551  60V,  50mA  ultra-small, high-efficiency, synchronous step-down DC-DC converter in  a  10-pin  µMAX package. The EV kit operates over a wide input voltage range of 6V to 60V and provides up to 50mA load current at 5V output. It draws only 26µA supply current under no-load conditions (EN/UVLO connected to VIN ). The EV kit is programmed to switch at a frequency of  300kHz. The device is simple to use and easily configurable  with  minimal  external  components.  It  features cycle-by-cycle peak current-limit protection, undervoltage lockout, and thermal shutdown.

The EV kit comes installed with the MAX17551AUB+ in a  10-pin  (3mm  x  3mm)  lead(Pb)-free/RoHS-compliant µMAX package.

## Features

- 6V to 60V Input Voltage Range
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

Ordering Information appears at end of data sheet.

μMAX is a registered trademark of Maxim Integrated Products, Inc.

Evaluates: MAX1751 ( µMAX) in 5V Output Voltage Applications

## Quick Start

## Recommended Equipment

- MAX17551 5V EV kit (µMAX)
- 60V adjustable, 0.5A DC power supply
- Electronic load up to 50mA
- Voltmeter

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
- 10)  Vary the input voltage from 6V to 60V.
- 11)  Vary the load current from 1mA to 50mA and verify that output voltage is 5V with respect to GND.

Note: While  performing  an  output  short-circuit  test,  it  is possible for the ceramic output capacitor to oscillate with the  wiring  inductance  between  the  capacitor  and  shortcircuited load, and thereby cause the absolute maximum rating  of  the  V OUT   pin  (-0.3V)  to  be  exceeded.  The resistor (R7) and the capacitor (C5) are included on this evaluation kit to protect against unintentional violation of the above mentioned rating. In the actual system design, parasitic board or wiring inductance should be minimized and  the  output-voltage  waveform  under  short-circuit operation should be verified to ensure that the absolute maximum rating of the V OUT  pin is not exceeded.

<!-- image -->

## MAX17551 5V Output Evaluation Kit (µMAX)

## Detailed Description

The MAX17551 5V EV kit (µMAX) is a fully assembled and tested  circuit  board  that  demonstrates  the  performance of  the  MAX17551 60V, 50mA ultra-small, high-efficiency, synchronous  step-down  DC-DC  converter  in  a  10-pin µMAX package. The  EV  kit  operates  over  a  wide  input voltage range of 6V to 60V and provides up to 50mA load current  at  5V  output.  It  draws  only  26µA  supply  current under no-load conditions (EN/UVLO connected to VIN). The EV kit is programmed to switch at a frequency of 300kHz. The  device  is  simple  to  use  and  easily  configurable  with minimal external components. It features cycle-by-cycle peak current-limit protection, undervoltage lockout, and thermal shutdown.

The EV kit includes an EN/UVLO PCB pad and jumpers JU1 and JU2 to enable control of the converter output. The  MODE  PCB  pad  and  jumper  JU3  are  provided for  selecting  the  mode  of  operation  of  the  converter.  A RESET PCB pad is available for monitoring the RESET output. The RT/SYNC PCB pad can be used to synchronize the EV kit switching frequency to an external clock frequency.

## Enable Control (JU1, JU2)

The EN/UVLO pin on the EV kit serves as an on/off control while  also  allowing  the  user  to  program  the  input  undervoltage-lockout (UVLO) threshold. Jumpers JU1 and JU2 configure  the  EV  kit's  output  for  turn-on/turn-off  control. See Table 1 for proper JU1, JU2 jumper configurations.

Additionally, resistors R1 and R2 are included to set the UVLO to a desired turn-on voltage. Refer to the Setting the  Input  Undervoltage-Lockout  Level section  in the MAX17551  IC  data  sheet  for  additional  information  on setting the UVLO threshold voltage.

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

## Evaluates: MAX17551 (µMAX) in 5V Output Voltage Applications

## RESET Output

The EV kit provides a PCB pad to monitor the status of the RESET output. RESET goes  high  when  the  output voltage  rises  above  95%  (typ)  of  its  nominal  regulated output voltage. RESET goes low when output voltage falls below 92% (typ) of its nominal regulated voltage.

## PFM or Forced-PWM Mode (MODE)

The EV kit includes a jumper (JU3) to select the mode of operation of the converter. Install a shunt across JU3 before powering up the EV kit to enable the forced-PWM operation. Keep JU3 open to enable the light-load PFM operation. See Table 2 for proper JU3 settings.

## Soft-Start

The  EV  kit  offers  a  fixed  5ms  soft-start  time.  Connect capacitor  C4  to  adjust  the  soft-start  time  (t SS ).  The minimum soft-start  time  is  related  to  the  output  capacitance  (C OUT )  and  the  output  voltage(V OUT )  by  the following equation.

t SS &gt; 0.05 x C OUT  x V OUT

where t SS  is in milliseconds and C OUT  is in µF.

Use  the  following  equation  to  determine  the  soft-start capacitance value (C SS ):

<!-- formula-not-decoded -->

where t SS  is in milliseconds and C SS  is in nanofarads.

## External Synchronization (RT/SYNC)

The EV kit provides a PCB pad to synchronize the EV kit  switching  frequency  to  an  external  clock  frequency. Apply  the  external  clock  to  the  RT/SYNC  PCB  pad though an AC-coupling capacitor. Refer to the External Synchronization section in the MAX17551 IC data sheet for  additional  information  on  configuring  the  external clock and selecting the AC-coupling capacitor.

## MAX17551 5V Output Evaluation Kit (µMAX)

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

= 60V

V IN

V IN

V IN

V IN

= 12V

10

1

0

= 48V

PFM MODE

10

LOAD CURRENT (mA)

OUTPUT VOLTAGE

vs. LOAD CURRENT

toc4

PWM MODE

V IN

= 48V

V IN

= 60V

20

30

40

50

LOAD CURRENT (mA)

<!-- image -->

= 36V

V IN

= 12V

= 24V

V IN

EFFICIENCY (%)

OUTPUT  VOLTAGE  (V)

V IN

= 24V

V IN

= 36V

EFFICIENCY (%)

V OUT

(AC)

I

OUT

V EN/UVLO

V OUT

I OUT

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

0

V IN

EFFICIENCY vs. LOAD CURRENT

V IN

toc2

= 12V

V IN

= 24V

= 36V

V IN

= 48V

V IN

= 60V

10

PWM MODE

20

30

40

LOAD CURRENT (mA)

LOAD TRANSIENT RESPONSE,

PFM MODE (LOAD CURRENT STEPPED

FROM 2mA to 27mA)

FIGURE6

APPLICATION

CIRCUIT

VOUT =5V

toc5

50

100mV/div

20mA/div

toc8

5V/div

2V/div

20mA/div

5V/div

200µs/div

SOFT-START

1ms/div

## Evaluates: MAX17551 (µMAX) in 5V Output Voltage Applications

OUTPUT VOLTAGE

vs. LOAD CURRENT

toc3

PFM MODE

V IN

= 36V

V IN

= 24V

V IN

= 48V

V IN

20

= 12V

10

30

= 60V

40

LOAD CURRENT (mA)

LOAD TRANSIENT RESPONSE

PFM OR PWM MODE (LOAD CURRENT

STEPPED FROM 25mA TO 50mA)

100µs/div

BODE PLOT

f CR = 16.3kHz,

PHASE MARGIN = 58°

PHASE

GAIN

104

FREQUENCY(Hz)

toc6

50

50mV/div

20mA/div

toc9

50

0

PHASE (°)

50

-100

105

│

OUTPUT VOLTAGE (V)

5.1

5.1

5.0

5.0

5.0

V OUT

(AC)

I OUT

40

30

GAIN (dB)

10-

-10-

-20-

-30

103

0

V IN

## MAX17551 5V Output Evaluation Kit (µMAX)

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| Coilcraft, Inc. | www.coilcraft.com |
| Murata Americas | www.murata.com    |
| Panasonic Corp. | www.panasonic.com |

Note: Indicate that you are using the MAX17551AUB when contacting these component suppliers.

## Component List and Schematic

Refer to the following files attached to this data sheet for component information and schematic:

- MAX17551EV\_µMAX\_BOM.xls
- MAX17551EV\_µMAX\_Schematic.pdf

Evaluates: MAX17551 (µMAX) in

5V Output Voltage Applications

│

## MAX17551 5V Output Evaluation Kit (µMAX)

Figure 1. MAX17551 5V EV Kit (µMAX) Component Placement Guide-Component Side

<!-- image -->

## Evaluates: MAX17551 (µMAX) in 5V Output Voltage Applications

Figure 2. MAX17551 5V EV Kit (µMAX) PCB LayoutComponent Side

<!-- image -->

Figure 3. MAX17551 5V EV Kit (µMAX) PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART              | TYPE   |
|-------------------|--------|
| MAX17551AUBEVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX17551 5V Output Evaluation Kit (µMAX)

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/15            | Initial release | -               |

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses aUe LPSlLed  0a[LP InteJUated UeVeUYeV tKe ULJKt tR FKanJe tKe FLUFXLtU\ and VSeFL¿FatLRnV ZLtKRXt nRtLFe at an\ tL

│

Evaluates: MAX17551 (µMAX) in

5V Output Voltage Applications