<!-- lastmod 2022-08-03 -->
## MAX207 Evaluation Kit

## General Description

The  MAX20070  evaluation  kit  (EV  kit)  demonstrates the  MAX20070  IC,  which  is  a  highly  integrated  power supply plus LED backlight driver for automotive TFT-LCD applications. The EV kit is a fully assembled and tested surface-mount  PCB  that  provides  a  complete  powermanagement solution for small-size automotive displays. The EV kit demonstrates one buck-boost converter, one boost converter, two gate-voltage controllers, and a boost converter that powers a dual-string LED driver.

The  DC-DC  converter  portion  of  the  EV  kit  operates from  a  2.7V  to  5.5V  DC  supply  voltage.  The  step-up switching regulator (POS) is configured for a 6.5V or 15V output  that  provides  100mA.  The  inverting  buck-boost converter (NEG) generates a negative output that tracks the positive output and provides 100mA. The gate-driver power supplies consist of regulated charge pumps that generate +16V (GVDD) and -7V (GVEE) and can deliver up to 3mA each. It is also possible to completely turn off the inverting buck-boost regulator by changing the value of the R15 resistor to 140kΩ.

The LED driver section demonstrates a step-up DC-DC preregulator  followed  by  two  channels  of  linear  current sinks.  The  step-up  preregulator  switches  at  1MHz  and operates as a current-mode-controlled regulator capable of  providing  up  to  300mA  for  the  linear  circuits.  Each channel is capable of operating up to 38V and provides up to 160mA. The channels are configurable for 80mA or 160mA HB LED output current.

The LED driver portion of the EV kit operates from a DC supply voltage of 4.5V up to the HB LED string-forward voltage. The EV kit can withstand a 40V load-dump condi -tion. The EV kit also demonstrates the IC's features, such as  adaptive  voltage  optimization,  overvoltage  protection (OVP),  cycle-by-cycle  current  limit,  thermal  shutdown, and digital PWM dimming operation using a digital PWM input signal to control the brightness of the HB LEDs.

The EV kit is shipped with the MAX20070, but can also be used to evaluate the MAX20070B with IC replacement of U1.

Evaluates: MAX207/MAX207B

## Features

- 2.7V to 5.5V Input Range for TFT Power Section
- 4.5V to 16V Input Range for LED Driver Section
- 1MHz Boost and Inverted Buck-Boost Switching Frequency on TFT Power Section
- TFT Section Output Voltages
- +6.5V Output at 100mA (Step-Up Switching Regulator)
- -6.5V Output at 100mA (Inverting Buck-Boost Switching Regulator)
- +16V Output at 3mA (Positive-Charge Pump)
- -7V Output at 3mA (Negative-Charge Pump)
- HB LED String Output Currents Configurable for 80mA or 160mA
- Demonstrates Cycle-by-Cycle Current-Limit and Thermal-Shutdown Features on Boost LED Driver
- Demonstrates Adaptive Voltage Optimization on LED Driver Section
- Proven PCB Layout and Thermal Design
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

## Quick Start

## Required Equipment

- MAX20070 EV kit
- 2.7V to 5.5V DC supply
- 4V to 18V DC supply
- Voltmeter
- Two series-connected HB LED strings rated to no less than 160mA
- Current probe to measure the HB LED current

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that a shunt is installed on jumpers JP2, JP3, and JP5.
- 2) Verify that jumpers JP1 and JP4 are open.
- 3) Connect  the  positive  terminal  of  the  (2.7V  to  5.5V) power  supply  to  the  TFT\_POWER\_INPUT  PCB pad.  Connect  the  negative  terminal  of  the  same power  supply  to  the  PGND  PCB  pad  close  to  the TFT\_POWER\_INPUT PCB pad.
- 4) Turn on the power supply.
- 5) Verify  that  the  step-up  switching  regulator  output (V POS ) to GND is +6.5V.
- 6) Verify  that  the  step-up  switching  regulator  output (V NEG ) to GND is -6.5V.
- 7) Verify that the positive charge-pump supply (V DGVDD ) is approximately +16V.
- 8) Verify that the negative charge-pump supply (V DGVEE ) is approximately -7V.
- 9) Connect  the  positive  of  the  (4.0V  to  16V)  power supply  to  the  BATTERY  INPUT  PCB  pad  and  the power supply's ground to the LGND PCB pad next to the BATTERY INPUT PCB pad.
- 10)  Connect the digital  voltmeter  across  the  OUT1  and LGND PCB pads. The LGND PCB pad is close to the OUT PCB pad.
- 11)  Connect each HB LED string as follows: Channel  1:  Connect  an  HB  LED  string  anode  to  the OUT PCB pad and the cathode to the OUT1 PCB pad. Channel  2:  Connect  an  HB  LED  string  anode  to  the OUT PCB pad and the cathode to the OUT2 PCB pad.
- 12)  Clip the current probe across the channel 1 HB LED+ wire to measure the HB LED current.
- 13)  Turn on the power supply and set it to 10V.
- 14)  Measure  the  voltage  from  the  OUT1-OUT2  PCB pads  to  GND  and  verify  that  the  lowest  voltage  is approximately 0.75V.

## Evaluates: MAX20070/MAX20070B

- 15)  Measure the HB LED current using the current probe and verify all channels.

## Detailed Description of Hardware

The  MAX20070  EV  kit  LED  driver  section  demonstrates the MAX20070 HB LED driver with an integrated step-up DC-DC preregulator followed by two channels of linear  current  sinks. The  preregulator  switches  at  1MHz and  operates  as  a  current-mode-controlled  regulator, providing up  to 320mA  for  the  linear circuit while providing  OVP.  Cycle-by-cycle  current  limit  is  set  by resistors R5 and R7, while resistors R2, R4, and R16 set the OVP voltage to 41.6V. The preregulator power section consists of inductor L2, power-sense resistors R5 and R7, and switching diode D1.

The EV kit circuit operates from a DC supply voltage of 4.5V up to the HB LED forward-string voltage. The circuit handles load-dump conditions up to 40V.

Each  of  the  two  linear  channels  (OUT1  and  OUT2)  is capable of operating up to 40V and sinks up to 160mA per channel.  Each  of  the  two  channel's  linear  current  sinks are configurable for 160mA or 80mA, or can be disabled independently by shorting the respective OUT\_ channel to ground before power-up with the LED string connected to the corresponding OUT\_ channel removed. Resistors R6,  R8,  and  jumper  JP1  configure  the  linear  current setting for the IC's ISET pin, which sets the HB LED string current.

The EV kit features PCB pads to facilitate connecting HB LED strings for evaluation. The OUT\_ PCB pads provide connections for connecting each HB LED string's anode to the DC-DC preregulator output. The OUT1 and OUT2 PCB pads provide connections for connecting each HB LED  string's  cathode  to  the  respective  linear  channel's current sink. Capacitors C16 and C32 are included on the design to prevent oscillations and provide stability when using long, untwisted HB LED connecting cables during lab  evaluation.  These  capacitors  are  not  required  on  a typical HB LED design.

A DIM\_IN PCB pad is provided for using a digital PWM signal to control the brightness of the HB LEDs.

## Enable Input (EN)

The  IC's  source-driver  and  gate-driver  outputs  (V POS , VNEG, V DGVDD , and V DGVEE ) are controlled by driving the  EN  pin.  The  LED  driver  section  is  also  enabled  by the EN input. When EN is left open, all the outputs are disabled. When EN is connected to a 2.1V logic-high (or greater) level, all the outputs are enabled.

## MAX20070 Evaluation Kit

## Source-Driver Output-Voltage Selection

The EV kit's step-up switching-regulator output (POS) is set by feedback resistors R11, R12, and R18. If R12 is 0Ω, the output voltage is set to 6.5V independent of the state of JP2. If R12 is changed to 10kΩ and JP2 is open, the output voltage is 15V. To generate output voltages other than 6.5V or 15V, open JP2 and select different external voltage-divider resistors for  R11 and R12. The negative source-driver supply voltage (NEG) is automatically tightly regulated to -POS within +50mV. NEG cannot be adjusted independently of POS. Refer to the Source Driver Power Supplies section in the MAX20070/MAX20070B IC data sheet for more information.

## Gate-Driver Output-Voltage Selection

The  EV  kit's  positive  gate-driver  power  supply  (GVDD) is  set  to  +16V  by  feedback  resistors  R9  and  R10.  To generate output voltages other than 16V, select different external voltage-divider resistors for R9 and R10. The negative gate-driver power supply (GVEE) is set to -7V  by  feedback  resistors  R13  and  R14.  To  generate output  voltages  other  than  -7V,  select  different  external voltage-divider  resistors  for  R13  and  R14.  Refer  to  the Gate-Driver  Power  Supplies section  in  the  MAX20070/ MAX20070B IC data sheet for more information.

## HB LED Current

The EV kit features a jumper to reconfigure the IC's LED current  sinks  on  both  channels.  When  inserted,  jumper JP1 configures the current sink to 160mA; removing the jumper  configures  the  current  sink  to  80mA.  See Table 1  for  jumper  JP1  settings.  To  reconfigure  the  circuit  for another  current-sink  threshold,  replace  resistor  R6  and use  the  following  equation  to  calculate  a  new  value  for the desired current:

<!-- formula-not-decoded -->

where I LED is  the  desired  HB  LED  current  in  amps  and R6 is the new resistor value for obtaining the desired HB

## Table 1. HB LED Current (JP1)

| SHUNT POSITION   | ISET PIN               |   HB LED CURRENT-SINK LIMITS (mA) |
|------------------|------------------------|-----------------------------------|
| Not installed*   | Connected to R6        |                                80 |
| Installed        | Connected to R6 and R8 |                               160 |

*Default position.

LED  current.  Remove  jumper  JP1  when  configuring  for another  current-sink  threshold.  If  the  HB  LED  current  is reconfigured  for  a  different  current,  other  components on  the  EV  kit  may  need  to  be  modified.  Refer  to  the MAX20070/MAX20070B IC data sheet to calculate other component values.

## HB LED Digital Dimming Control

The  EV  kit  features  a  DIM\_IN  PCB  input  pad  for connecting an external digital PWM signal. The DIM\_IN input is pulled up internally to V CC  by an internal current source  of  5μA. Apply  a  digital  PWM  signal  with  a  0.8V logic-low (or less) and 2.1V logic-high (or greater) level, and frequencies from 200Hz to 20kHz. To adjust the HB LED  brightness,  vary  the  signal  duty  cycle  from  0  to 100% and maintain a minimum pulse width of 1μs. Apply the  digital  PWM  signal  to  the  DIM\_IN  PCB  pad.  Refer to  the LED Dimming Control section  in  the  MAX20070/ MAX20070B IC data sheet for additional information on the dimming feature.

## FLT Signal

The EV kit features a FLT signal. The FLT signal is pulled up to TFT\_POWER\_INPUT if JP5 is installed. Refer to the Short Led Detection and the Fault Protection on the TFT Section sections in the MAX20070/MAX20070B IC data sheet for further information on the FLT signal.

## OVP Configuration

The IC's LED driver OVP resistors (R2, R4, and R16) are configured for  an  OVP of 41.6V. This sets the maximum channel (V OUT ) voltage at 41.6V. Capacitor C31 provides noise filtering to the OVP signal. To reconfigure the circuit for a different OVP voltage, replace resistors R2 and R16 with a different value using the following equation:

<!-- formula-not-decoded -->

where  R4  is  7.5kΩ,  OVP  is  the  overvoltage-protection voltage desired, and R2 + R16 is the new resistor value for obtaining the desired overvoltage protection. Refer to the Open-LED Management and Overvoltage Protection section in the MAX20070/MAX20070B IC data sheet for additional  information  on  the  OVP  feature.  Use  the  N1 MOSFET, in series with resistor R4, to lower the current drawn from the BATTERY\_INPUT when EN is low.

│

## MAX20070 Evaluation Kit

## Component List

| PART                                       |   QTY | DESCRIPTION                                                          |
|--------------------------------------------|-------|----------------------------------------------------------------------|
| C1                                         |     1 | 10µF ±20%, 50V aluminum electrolytic capacitor Panasonic EEEFK1H100P |
| C2                                         |     1 | 33µF ±20%, 50V aluminum electrolytic capacitor Suncon 50HVH33M       |
| C3                                         |     1 | 1µF ±10%, 50V X7R ceramic capacitor (0805)                           |
| C4                                         |     1 | 2.2µF ±10%, 50V X7R ceramic capacitor (1210)                         |
| C5, C28, C30                               |     3 | 1µF ±10%, 50V X7R ceramic capacitors (1210)                          |
| C6, C7, C34                                |     3 | 10µF ±10%, 6.3V X7R ceramic capacitors (0805)                        |
| C8, C17, C18, C25, C26                     |     5 | 4.7µF ±10%, 25V X7R ceramic capacitors (0805)                        |
| C9, C14, C19                               |     3 | 1µF ±10% , 25V X7R ceramic capacitors (0805)                         |
| C10-C12, C15, C20, C21, C27, C33, C37, C38 |    10 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603)                        |
| C13                                        |     1 | 33nF ±10%, 50V X7R ceramic capacitor (0805)                          |
| C16, C32                                   |     0 | Not installed, ceramic capacitors (0603)                             |
| C22, C24, C35, C36                         |     4 | 2.2µF ±10%, 25V X7R ceramic capacitors (0805)                        |
| C23                                        |     1 | 0.22µF ±10%, 50V X7R ceramic capacitor (0603)                        |
| C29                                        |     1 | 470pF ±10%, 50V X7R ceramic capacitor (0603)                         |
| C31                                        |     1 | 1nF ±1%, 50V, C0G ceramic capacitor (0603)                           |
| C39                                        |     1 | 220pF ±5%, 50V C0G ceramic capacitor (0603)                          |
| C40, C41                                   |     2 | 100pF ±5%, 25V C0G ceramic capacitors (0603)                         |

Evaluates: MAX20070/MAX20070B

| PART     |   QTY | DESCRIPTION                                              |
|----------|-------|----------------------------------------------------------|
| D1       |     1 | 60V, 3A Schottky diode (SMB)                             |
| D2       |     1 | 60V, 2A Schottky diode (DO-220AA) SS2P6-M3/84A           |
| D6, D9   |     2 | 30V, 0.2A dual-in series zener diodes (SOT23) BAT54S     |
| D10, D11 |     2 | 75V, 0.6A dual-in series zener diodes (SOT23) MMBD4148SE |
| D12      |     1 | 30V, 0.5A Schottky diode (SOD323) (B0530)                |
| D17      |     1 | 40V, 0.5A Schottky diode (SOD323) (CMHSH05-4)            |
| FB1      |     1 | 0Ω, 0.25W resistor (1206)                                |
| JP1-JP5  |     5 | 2-pin headers                                            |
| L1       |     1 | 0.56μH ±20%, 2.8A inductor Coilcraft LPS4018-561MR       |
| L2       |     1 | 4.7μH ±20%, 6.9A inductor Coilcraft MSS1048-472ML        |
| L3, L4   |     2 | 10μH ±20%, 1.25A inductors Coilcraft LPS4018-103MR       |
| N1       |     1 | 30V, 1.4A n-channel MOSFET SuperSot-3 (NDS351AN)         |
| R1       |     1 | 10Ω ±1%, 0.25W resistor (1206)                           |
| R2, R16  |     2 | 121kΩ ±1%, 0.1W resistors (0603)                         |
| R3       |     1 | 2.55kΩ ±1%, 0.1W resistor (0603)                         |
| R4       |     1 | 7.5kΩ ±1%, 0.1W resistor (0603)                          |
| R5, R7   |     2 | 0.082Ω ±1%, 0.5W resistors (1210)                        |
| R6, R8   |     2 | 18.7kΩ ±1%, 0.1W resistor (0603)                         |
| R10      |     1 | 16.9kΩ ±1%, 0.1W resistor (0603)                         |
| R11, R18 |     2 | 110kΩ ±1%, 0.1W resistors (0603)                         |
| R12      |     1 | 0Ω, 0.1W resistor (0603)                                 |

│

## Component List (continued)

| PART     |   QTY | DESCRIPTION                      |
|----------|-------|----------------------------------|
| R13      |     1 | 845kΩ ±1%, 0.1W resistor (0603)  |
| R14      |     1 | 150kΩ ±1%, 0.1W resistor (0603)  |
| R15      |     1 | 20kΩ ±1%, 0.1W resistor (0603)   |
| R17      |     1 | 10kΩ ±1%, 0.1W resistor (0603)   |
| R19      |     1 | 4.99kΩ ±1%, 0.1W resistor (0603) |
| R20      |     0 | Not installed, resistor (0603)   |
| R21, R22 |     2 | 32Ω ±1%, 0.25W resistors (1206)  |

* EP = Exposed pad.

| PART     |   QTY | DESCRIPTION                                                                             |
|----------|-------|-----------------------------------------------------------------------------------------|
| R23, R24 |     2 | 100kΩ ±1%, 0.1W resistors (0603)                                                        |
| U1       |     1 | Integrated TFT power supply and LED backlight driver (32 TQFN-EP*) Maxim MAX20070GTJ/V+ |
| -        |     1 | PCB: MAX20070 EVKIT+                                                                    |

Figure 1. MAX20070 EV Kit Schematic

<!-- image -->

Figure 2. MAX20070 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX20070 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX20070 EV Kit PCB Layout-PGND Layer 2

<!-- image -->

Figure 5. MAX20070 EV Kit PCB Layout-LGND Layer 3

<!-- image -->

Figure 6. MAX20070 EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20070EVKIT# | EV Kit |

# Denotes RoHS compliant.

│

## MAX20070 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                   | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------|-----------------|
|                 0 | 3/15            | Initial release               | -               |
|                 1 | 9/15            | Added MAX20070B to data sheet | 1-13            |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-462, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX20070/MAX20070B