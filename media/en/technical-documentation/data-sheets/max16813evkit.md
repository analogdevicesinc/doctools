<!-- lastmod 2022-08-03 -->
## MAX16813 Evaluation Kit

## General Description

The  MAX16813  evaluation  kit  (EV  kit)  demonstrates the  MAX16813  high-brightness  LED  (HB  LED)  driver, integrating  a  step-up  DC-DC preregulator followed by 4 channels of linear current sinks. The step-up preregulator switches  at  350kHz  and  operates  as  a  current-modecontrolled  regulator  capable  of  providing  up  to  600mA for  the  linear  circuits.  Each  of  the  4  linear  channels  are capable of operating up to 40V and provide up to 150mA per channel. The 4 channels are configurable for 100mA or 150mA HB LED output current.

The EV kit operates from a 6.5V DC supply voltage up to  the  HB  LED  string-forward  voltage.  The  EV  kit  can withstand  a  40V  load-dump  condition  for  up  to  400ms. The  EV  kit  demonstrates  the  device  features  such  as adaptive voltage optimization, undervoltage lockout (UVLO),  overvoltage  protection  (OVP),  cycle-by-cycle current limit, thermal shutdown, and digital PWM dimming operation using a digital PWM input signal to control the brightness of the HB LEDs. The EV kit includes an external pMOSFET (Q2) that can be used to disconnect the boost output from the battery in the event of an output overload or short condition.

The MAX16813 EV kit can also be used to evaluate the MAX16813B with simple IC replacement of U1.

## Component List

| DESIGNATION     |   QTY | DESCRIPTION                                                          |
|-----------------|-------|----------------------------------------------------------------------|
| C1, C23         |     2 | 4.7µF ±10%, 50V X7R ceramic capacitors (1210) Murata GRM32ER71H475K  |
| C2              |     1 | 47µF, 50V electrolytic capacitor (6.3mm x 7.7mm Case) SANYO 50CE47KX |
| C3, C4, C7, C12 |     4 | 1µF ±10%, 50V X7R ceramic capacitors (0805) Murata GRM21BR71H105K    |
| C5              |     1 | 33µF, 50V electrolytic capacitor (6.3mm x 7.7mm Case) SANYO 50CE33KX |
| C6              |     0 | Not installed, electrolytic capacitor (6.3mm x 7.7mm Case)           |

Evaluates: MAX16813/MAX16813B

## Benefits and Features

- 6.5V	Up	to	HB	LED	Forward	Voltage
- Demonstrates	OVP	(33V)
- HB	LED	String	Output	Currents	Configurable	for 100mA or 150mA
- Demonstrates	UVLO	(4V)
- Demonstrates	Cycle-by-Cycle	Current-Limit	and Thermal-Shutdown Features
- Demonstrates	Adaptive-Voltage	Optimization
- Demonstrates	Output	Short	Protection	and Ultra-Low Current Shutdown
- Proven	PCB	and	Thermal	Design
- Fully	Assembled	and	Tested

Ordering Information appears at end of data sheet.

| DESIGNATION   |   QTY | DESCRIPTION                                                          |
|---------------|-------|----------------------------------------------------------------------|
| C8, C13-C16   |     0 | Not installed, ceramic capacitors (0603)                             |
| C9, C11       |     2 | 1000pF ±5%, 25V C0G ceramic capacitors (0603) Murata GRM1885C1E102J  |
| C10           |     1 | 0.022µF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H223K |
| C17           |     1 | 47pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H470J     |
| C18-C21       |     4 | 2200pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H222J  |

<!-- image -->

## MAX16813 Evaluation Kit

## Component List (continued)

| DESIGNATION     |   QTY | DESCRIPTION                                                                |
|-----------------|-------|----------------------------------------------------------------------------|
| C22             |     1 | 0.047µF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H473K       |
| D1, D3          |     2 | 60V 1A Schottky diodes (SMB) Diodes Inc. B160B-13-F                        |
| D2              |     1 | 75V, 250mA high-speed diode (SOT23) Central Semi CMPD914E (Top Mark: C5DE) |
| D4              |     1 | 18V zener diode (DO-214AC) Vishay BZG03C18TR                               |
| FB1             |     1 | 0Ω resistor (1210)                                                         |
| JU3-JU11        |     9 | 2-pin headers                                                              |
| JU2             |     1 | 3-pin header                                                               |
| L1              |     1 | 10µH ±20%, 3A inductor Coilcraft MSS1048-103ML                             |
| L2              |     1 | 22µH ±20%, 5A inductor Coilcraft MSS1260-223Ml                             |
| OVP, PGATE, VCC |     3 | Miniature red PC test points                                               |
| Q1              |     1 | 40V, 200mA pnp transistor (3 SOT23) Diodes Inc. MMBT3906-7-F               |
| Q2              |     1 | 60V, 55A p-channel MOSFET (D2PAK) Vishay SUM55P06-19L-E3                   |
| Q3              |     1 | 40V, 9A n-channel MOSFET (8 SO) International Rectifier IRF7469            |

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                            |
|---------------|-------|------------------------------------------------------------------------|
| R1            |     1 | 10kΩ ±5% resistor (0603)                                               |
| R2            |     1 | 1MΩ ±5% resistor (0603)                                                |
| R3            |     1 | 22Ω ±5% resistor (0805)                                                |
| R4            |     1 | 0.1Ω ±1%, 0.5W resistor (2010) IRC LRC-LRF2010LF-01-R100-F             |
| R5            |     1 | 2.4kΩ ±1% resistor (0805)                                              |
| R6            |     1 | 261kΩ 1% resistor (0805)                                               |
| R7            |     1 | 10kΩ ±1% resistor (0805)                                               |
| R8, R9        |     2 | 10kΩ ±5% resistors (0805)                                              |
| R10           |     1 | 30.1kΩ ±1% resistor (0805)                                             |
| R11           |     1 | 20kΩ ±1% resistor (0805)                                               |
| R12           |     1 | 200Ω ±1% resistor (0603)                                               |
| R13           |     1 | 21kΩ ±1% resistor (0603)                                               |
| R14, R15      |     2 | 15kΩ ±1% resistors (0805)                                              |
| R16           |     1 | 30.1kΩ ±1% resistor (0805)                                             |
| R17           |     0 | Not installed, resistor (0603)                                         |
| R18           |     1 | 1kΩ ±5% resistor (0805)                                                |
| R19           |     1 | 1.4kΩ ±1% resistor (0805)                                              |
| R20           |     0 | Not installed, resistor                                                |
| R21           |     1 | 0.1Ω ±1, 0.5W current-sense resistor (1206) IRC LRC-LR1206LF-01-R100-F |
| SGND          |     1 | Miniature black PC test point                                          |
| U1            |     1 | 4-channel HB LED driver controller (20 TQFN-EP*) Maxim MAX16813ATP/V+  |
| -             |     7 | Shunts                                                                 |
| -             |     1 | PCB: MAX16813 EVKIT                                                    |

│

## Quick Start

## Required Equipment

- MAX16813	EV	kit
- 6.5V	to	40V,	4A	DC	power	supply
- Digital	voltmeter
- Four	series-connected	HB	LED	strings	rated	no	less than 150mA
- Current	probe	to	measure	the	HB	LED	current

## Output Testing

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify  that  a  shunt  is  installed  on  jumper  JU1  and across pins 1-2 on jumper JU2 (device enabled).
- 2) Verify that a shunt is installed on jumper JU3 (150mA HB LED current-sink limit).
- 3) Verify  that  shunts  are  not  installed  on  jumpers JU4-JU7 (all channels powered).
- 4) Connect the power supply to the VIN PCB pad and the power supply's ground to the PGND PCB pad.
- 5) Connect the  digital  voltmeter  across  the  OUT1  and PGND PCB pads.
- 6) Connect each HB LED string as follows:

Channel  1:  Connect  an  HB  LED  string  anode  to the VOUT PCB pad and the cathode to the OUT1 PCB pad.

Channel  2:  Connect  an  HB  LED  string  anode  to the VOUT PCB pad and the cathode to the OUT2 PCB pad.

Channel  3:  Connect  an  HB  LED  string  anode  to the VOUT PCB pad and the cathode to the OUT3 PCB pad.

Channel  4:  Connect  an  HB  LED  string  anode  to the VOUT PCB pad and the cathode to the OUT4 PCB pad.

- 7) Clip the current probe across the channel 1, HB LED+ wire to measure the HB LED current.
- 8) Turn on the power supply and set to 10V.
- 9) Measure  the  voltage  from  the  OUT1-OUT4  PCB pads to SGND and verify that the lowest voltage is approximately 1.1V.
- 10) Measure the HB LED current using the current probe and verify all channels.

## Detailed Description of Hardware

The MAX16813 EV kit demonstrates the MAX16813 HB LED driver with an integrated step-up DC-DC preregulator followed by 4 channels of linear current sinks. The preregulator switches at 350kHz and operates as a currentmode-controlled regulator providing up to 600mA for the linear circuit while providing OVP. Cycle-by-cycle current limit  is  set  by  resistor  R4 while resistors R6 and R7 set the OVP voltage to 33V. The preregulator power section consists of inductor L2, MOSFET Q3, power sense resistor R4, and switching diode D1.

The EV kit circuit operates from a DC supply voltage of 6.5V up to the HB LED forward string voltage. The circuit handles load-dump conditions up to 40V.

The  EV  kit  circuit  demonstrates  ultra-low  shutdown current when the EN pin of the device is pulled to ground by shorting the ENABLE PCB pad to ground. The EV kit also  demonstrates  output  short  protection  and  recovery from short. This can be tested by shorting the VOUT PCB pad to the PGND PCB pad.

Each of the 4 linear channels (OUT1-OUT4) is capable of operating up to 40V and sink up to 150mA per channel. Each of the 4 channel's linear current sinks is configurable for 150mA or 100mA, or can be disabled independently. Jumpers JU4-JU7 provide the disable feature when the HB  LED  string  is  not  connected.  See  the Channel  1Channel 4 Current-Sink Disabling section. Resistors R15, R16, and jumper JU3 configure the linear current setting for the device's SETI pin, which sets the HB LED string current.The EV kit features PCB pads to facilitate connecting HB LED strings for evaluation. The VOUT PCB pads provide connections for connecting each HB LED string's anode  to  the  DC-DC  preregulator  output.  The  OUT1OUT4 PCB pads provide connections for connecting each HB LED string's cathode to the respective linear channel's current  sink.  Additionally,  2-pin  headers  (JU8-JU11) provide convenient access to the VOUT and respective OUT\_  connections  when  using  a  twisted-pair  wiringconnection  scheme.  On  each  header,  pin  1  provides access  to  the  respective  OUT\_  connection  and  pin  2 provides  access  to  the  VOUT  connection.  Capacitors C18-C21  are  included  on  the  design  to  prevent  oscillations  and  provide  stability  when  using  long,  untwisted HB LED-connecting cables during lab evaluation. These capacitors are not required on a typical HB LED design.

A  DIM  PCB  pad  is  provided  for  using  a  digital  PWM signal to control the brightness of the HB LEDs. The EV kit can also demonstrate the device's synchronizing feature using the SYNC PCB pad and an external AC clock

## MAX16813 Evaluation Kit

signal. Test points are also provided for easy access to the device's V CC  and SGND.

## Enable

The EV kit features an enable input that can be used to enable and disable the device and place it in shutdown mode. To enable the EV kit whenever power is applied to VIN and PGND, place the jumper across pins 1-2 on jumper JU2.

To enable the EV kit from an external enable signal, place the jumper across pins 2-3 on JU2. In this configuration, apply a logic signal on the ENABLE input pad on the EV kit. The enable EN input should not be left unconnected.

Refer  to  the Enable section  in  the  MAX16813  IC  data sheet for additional information. See Table 1 for jumper JU2 settings.

## HB LED Current

The  EV  kit  features  jumper  JU3  to  reconfigure  the device's current sinks on all 4 channels. Place a shunt on jumper JU3 to configure the current-sink limits to 150mA. Remove the shunt from JU3 to configure the current-sink limits to 100mA. See Table 2 for jumper JU3 settings.

To reconfigure the circuit for another current-sink threshold, replace resistor R15 and use the following equation to calculate a new value for the desired current:

<!-- formula-not-decoded -->

where I LED  is the desired HB LED current in amps and R15

## Table 1. Enable (JU2)

| SHUNT POSITION                                            | EN PIN                              | EV KIT OPERATION            |
|-----------------------------------------------------------|-------------------------------------|-----------------------------|
| 1-2*                                                      | Connected to IN                     | Enabled                     |
| 2-3 (ENABLE test pad shorted to SGND)                     | Connected to SGND                   | Disabled                    |
| 2-3 (ENABLE test pad connected to an external controller) | Connected to an external controller | External controller enabled |

*Default position.

## Table 2. HB LED Current (JU3)

| SHUNT POSITION   | SETI PIN                 |   HB LED CURRENT-SINK LIMITS (mA) |
|------------------|--------------------------|-----------------------------------|
| Not installed    | Connected to R15         |                               100 |
| Installed*       | Connected to R15 and R16 |                               150 |

*Default position.

## Evaluates: MAX16813/MAX16813B

is the new resistor value for obtaining the desired HB LED current. Remove jumper JU3 when configuring for another current-sink threshold. If the HB LED current is reconfigured for a different current, other components on the EV kit may need to be modified. Refer to the MAX16813 IC data sheet to calculate other component values.

## Channel 1-Channel 4 Current-Sink Disabling

The  EV  kit  features  jumpers  JU4-JU7  to  disable  each channel's  OUT\_  current  sink.  To  disable  a  channel, install a jumper in the channel's respective OUT\_ jumper.  Remove  the  shunt  to  use  a  channel's  OUT\_  sink capability. See Table 3 for JU4-JU7 jumper settings.

## HB LED Digital Dimming Control

The  EV  kit  features  a  DIM  PCB  input  pad  for  connecting  an  external  digital  PWM  signal.  The  DIM  PCB  pad is pulled up to VCC by resistor R8. Apply a digital PWM signal with a 0.8V logic-low (or less) 2.1V logic-high (or greater) level, and frequencies from 100Hz to 20kHz. To adjust the HB LED brightness, vary the signal duty cycle from  0  to  100%  and  maintain  a  minimum  pulse  width of  500ns. Apply  the  digital  PWM  signal  to  the  DIM  and SGND  PCB  pads.  Refer  to  the LED  Dimming  Control section  in  the  MAX16813  IC  data  sheet  for  additional information on the device's dimming feature.

## FLT and RT (External Clock Synchronizing) Signals

The EV kit features the device's FLT and AC-coupled RT signals. The FLT signal is pulled up to VCC by resistor R9.

│

## MAX16813 Evaluation Kit

An  open-drain  fault  flag  output  ( FLT )  goes  low  when an  open-LED  string  is  detected,  a  shorted-LED  string is  detected,  an  output  undervoltage,  or  during  thermal shutdown.  Refer  to  the Fault  Protections section  in  the MAX16813 IC data sheet for additional information on the FLT signal.

The SYNC PCB pad is used for connecting an external clock for synchronizing the device's switching frequency through  its  RT  pin.  The  signal  must  also  have  a  4V P-P amplitude  and  frequencies  from  390kHz  to  410kHz. Apply the external clock signal to the SYNC and SGND PCB  pads.  Refer  to  the Oscillator  Frequency/External Synchronization section in the MAX16813 IC data sheet for  additional  information  on  the  device's  synchronizing feature.

## OVP Configuration

The device's OVP resistors (R6 and R7) are configured for  an  OVP  of  33V.  This  sets  the  maximum  channel (VOUT)  voltage  at  33V.  Capacitor  C9  provides  noise filtering to the OVP signal. To reconfigure the circuit for a different OVP voltage, replace resistor R6 with a different value using the following equation:

<!-- formula-not-decoded -->

where	R7	is	10kΩ,	OVP	is	the	overvoltage-protection	volt -age desired, and R6 is the new resistor value for obtaining the  desired  overvoltage  protection.  Refer  to  the Open- LED Management and Overvoltage Protection section in the MAX16813 IC data sheet for additional information on the OVP feature.

## Output Short Protection

The  boost  output  appearing  at  VOUT  can  be  shorted to  PGND  without  any  damage.  This  can  be  tested  at power-up or it can also be done at any time during normal operation by shorting the VOUT PCB pad to PGND.  The ENABLE PCB pad can be connected to IN by installing jumper  JU2  from  pins  1-2.  When  the  unit  is  powered up  with  a  short  on  VOUT  to  PGND,  resistor  R21  in conjunction with the transistor Q1 limits the current that can flow in Q2 once it is turned on. The current is limited to  VBE(Q1)/R21.  This current flows for 33ms (typ) into the short after power-up. Refer to the Startup Sequence section in the MAX16813 IC data sheet for more information. After 33ms of power-up, the IC is disabled and the external MOSFET Q2 is turned off. The IC is then latched off and ENABLE has to be recycled, or input power has to  be  recycled,  to  resume  operation  after  the  short  is removed.

The VOUT PCB pad can also be shorted to PGND at any time during normal operation. An output short causes the voltage on the OVP pin to go below 0.585mV resulting in an output undervoltage, which causes the PGATE pin to go high and disconnects the external MOSFET Q2 from the input. The FLT pin also goes low in the case of a short on the output.

## Table 3. Disabling Channel 1-Channel 4 (JU4-JU7)

| OUT_   | JUMPER   | SHUNT POSITION   | CHANNEL OPERATION                                                  |
|--------|----------|------------------|--------------------------------------------------------------------|
| OUT1   | JU4      | Not installed    | Channel 1 operational, connect an HB LED string* to VOUT and OUT1. |
| OUT1   | JU4      | Installed        | Channel 1 OUT1 not used.                                           |
| OUT2   | JU5      | Not installed    | Channel 2 operational, connect an HB LED string* to VOUT and OUT2. |
| OUT2   | JU5      | Installed        | Channel 2 OUT2 not used.                                           |
| OUT3   | JU6      | Not installed    | Channel 3 operational, connect an HB LED string* to VOUT and OUT3. |
| OUT3   | JU6      | Installed        | Channel 3 OUT3 not used.                                           |
| OUT4   | JU7      | Not installed    | Channel 4 operational, connect an HB LED string* to VOUT and OUT4. |
| OUT4   | JU7      | Installed        | Channel 4 OUT4 not used.                                           |

│

Figure 1. MAX16813 EV Kit Schematic

<!-- image -->

<!-- image -->

Figure 2. MAX16813 EV Kit Component Placement GuideComponent Side

Figure 3. MAX16813 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX16813 EV Kit PCB Layout-SGND Layer 2

<!-- image -->

Figure 5. MAX16813 EV Kit PCB Layout-PGND Layer 3

<!-- image -->

Figure 6. MAX16813 EV Kit PCB Layout-VCC and PGND Solder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16813EVKIT# | EV Kit |

#Denotes RoHS compliant.

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------------|-----------------|
|                 0 | 8/13            | Initial release                                                            | -               |
|                 1 | 12/17           | Added MAX16813B as a new part that can be evaluated by the MAX16813 EV kit | 1-10            |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Ma[im	Integrated	reserves	the	right	to	change	the	circuitry	and	specifications	without	notice	at	any	time.

│

Evaluates: MAX16813/MAX16813B