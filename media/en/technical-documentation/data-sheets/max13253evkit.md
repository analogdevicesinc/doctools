<!-- lastmod 2022-08-02 -->
## MAX13253 Evaluation Kit

## General Description

The MAX13253 evaluation kit (EV kit) is a fully assembled and tested  PCB  that  demonstrates  the  MAX13253  lowEMI  push-pull  transformer  driver.  The  EV  kit  operates from  a  single  3.0V  to  5.5V  supply  and  the  on-board 1CT:1.3CT turns-ratio transformer sets the output voltage.

The  EV  kit  provides  up  to  90%  overall  efficiency  at 5V  with  up  to  4.5W  output  power  using  a  push-pull isolated DC-DC converter. Undervoltage lockout, current limiting, and thermal shutdown provide for a robust isolated  supply. The  surface-mount  transformer  provides galvanic isolation with the output powered from a push-pull rectifier circuit, reducing the output-voltage ripple.

The EV kit circuit is configured as a push-pull rectifier, with an output voltage that follows the input voltage. The EV kit is also configurable for other topologies including bipolar outputs and full-wave rectification.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| C1, C2        |     2 | 1µF ±10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E105K  |
| C3, C5        |     2 | 10µF ±10%, 25V X7R ceramic capacitors (1206) Murata GRM31CR71E106K |
| C4            |     0 | Not installed, ceramic capacitor (1206)                            |
| D1            |     1 | Red LED (1206)                                                     |
| D2, D3        |     2 | 30V, 2A Schottky diodes (SMA) Diodes Inc. B230A-13-F               |
| D4, D5        |     0 | Not installed, Schottky diodes (SMA)                               |
| J1, J3, J4    |     3 | 3-pin headers                                                      |

## Component Suppliers

| SUPPLIER                                | PHONE        | WEBSITE                     |
|-----------------------------------------|--------------|-----------------------------|
| Diodes Incorporated                     | 972-987-3900 | www.diodes.com              |
| Halo Electronics, Inc.                  | 650-903-3800 | www.haloelectronics.com     |
| Murata Electronics, North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note:

Indicate that you are using the MAX13253 when contacting these component suppliers.

Evaluates: MAX13253

## Features and Benefits

- 3.0V	to	5.5V	Operating	Voltage	Range
- Up	to	90%		Efficiency
- Push-Pull	Rectified	Output
- Configurable	Bipolar	Outputs	or	Full-Wave	Rectifier
- Internal	or	External	Clock	Operation
- Selectable	Spread-Spectrum	Option	for	Controlled	EMI
- Proven	PCB	Layout
- Fully	Assembled	and	Tested

Ordering Information appears at end of data sheet.

| DESIGNATION   |   QTY | DESCRIPTION                                                                      |
|---------------|-------|----------------------------------------------------------------------------------|
| J2, J5        |     2 | 2-pin headers                                                                    |
| R1            |     1 | 560Ω ±5% resistor (0603)                                                         |
| R2            |     1 | 0Ω ±5% resistor (0603)                                                           |
| R3            |     1 | 1kΩ ±5% resistor (0603)                                                          |
| TX1           |     1 | 1CT:1.3CT turns-ratio transformer (8 Gull Wing) Halo TGM-H240V8LF                |
| U1            |     1 | 1A spread-spectrum push-pull transformer driver (10 TDFN-EP*) Maxim MAX13253ATB+ |
| -             |     5 | Shunts                                                                           |
| -             |     1 | PCB: MAX13253 EVALUATION KIT                                                     |

* EP = Exposed pad.

<!-- image -->

## Quick Start

## Required Equipment

- MAX13253	EV	kit
- 5.0V,	2A	DC	power	supply
- Electronic	load	capable	of	1A
-  Ammeter
- Voltmeter

## Procedure

The	EV	kit	is	fully	assembled	and	tested.	Follow	the	steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that jumpers  J1-J5  are  in their default positions, as shown in Table 1.
- 2) Set the DC power supply to 5.0V.
- 3) Set  the  electronic  load  to  500mA  and  disable  the output.
- 4) Connect	 the	 voltmeter	 between	 the	 +VOUT	 and SGND PCB pads on the EV kit.
- 5) Connect	the	ammeter	between	the	+VOUT	PCB	pad on the EV kit and the positive terminal on the electronic load. The negative terminal on the electronic load is connected to the SGND PCB pad on the EV kit.
- 6) Connect  the  power  supply  between  the  VDD  and GND PCB pads on the EV kit.
- 7) Turn	on	the	power	supply.
- 8) Enable	the	electronic	load.
- 9) Verify	that	the	ammeter	reads	approximately	500mA.

## Table 1. Jumper Description Table

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                   |
|----------|------------------|-----------------------------------------------------------------------------------------------|
| J1       | 1-2              | EN connected to V DD .                                                                        |
| J1       | 2-3*             | EN connected to GND. Device enabled.                                                          |
| J2       | Installed*       | CLK connected to GND. Internal oscillator enabled.                                            |
| J2       | Not installed    | CLK open. External oscillator enabled. Apply a clock signal to the CLK PCB pad on the EV kit. |
| J3       | 1-2              | HICLK connected to V DD . T1/T2 switch at 600kHz.                                             |
| J3       | 2-3*             | HICLK connected to GND. T1/T2 switch at 250kHz.                                               |
| J4       | 1-2              | SPRD connected to V DD . Spread-spectrum functionality enabled.                               |
| J4       | 2-3*             | SPRD connected to GND. Spread-spectrum functionality disabled.                                |
| J5       | Not installed*   | +VOUT is not shorted to SGND.                                                                 |
| J5       | Installed        | +VOUT is shorted to SGND.                                                                     |

Evaluates: MAX13253

- 10)  Verify	that	the	voltmeter	reads	approximately	5.5V.

## Detailed Description

The  MAX13253  EV  kit  is  a  low-EMI,  isolated  push-pull DC-DC  converter  that  provides  an  unregulated  output with	respect	to	the	isolated	ground.	The	maximum	load	is limited by the device and winding ratio of the transformer.

The  device  is  an  integrated  primary-side  controller  and push-pull  driver  for  isolated  power-supply  circuits.  The device contains an on-board oscillator, protection circuitry, and	 internal	 MOSFETs	 to	 provide	 up	 to	 1A	 of	 current to  the  transformer's  primary  winding.  The  device  can be  operated  using  the  internal  pin-selectable  oscillator, or	 driven	 by	 an	 external	 clock	 to	 synchronize	 multiple devices.

The  device  operates  from  a  single-supply  voltage  and includes	 UVLO	 and	 an	 active-low	 enable	 input	 for controlled startup. If the input voltage at V DD  falls below 2.55V, or the EN input  is  pulled  above  2.0V,  the  device shuts down and T1 and T2 are high impedance.

## Clock Source

The device has two modes of operation, internal oscillator or	external	clock.

## Using the Internal Oscillator and Spread-Spectrum Functionality

The device includes an internal oscillator with a guaranteed 50% duty cycle. To use the internal oscillator, place a shunt across pins 1-2 on jumper J2. Place a shunt across pins 1-2 on jumper J3 to set the T1/T2 switching frequency to 600kHz	(typ).	Place	a	shunt	across	pins	2-3	on	J3	to	set the	T1/T2	switching	frequency	to	250kHz	(typ).

The  device  features  pin-selectable  spread-spectrum functionality on the internal oscillator for controlled EMI. Use  jumper  J4  on  the  EV  kit  to  enable  or  disable  the spread-spectrum functionality when the internal oscillator is enabled. Place a shunt across pins 1-2 on J4 to enable the	 ±4%	 frequency	 spread	 on	 the	 internal	 oscillator. Place a shunt across pins 2-3 or leave J4 open to disable spread spectrum.

## Using the External Oscillator

When	using	the	external	clock,	remove	the	shunt	from	J2 and	apply	a	clock	signal	on	the	CLK	PCB	pad	on	the	EV kit.	An	internal	flip-flop	divides	the	external	clock	by	two, generating a switching signal with a guaranteed 50% duty cycle. As a result, the T1/T2 outputs switch at one-half the external	clock	frequency.

## Overcurrent Limiting

The  device  features  overcurrent  limiting  to  protect  the IC	from	excessive	currents	when	charging	large	capaci -tive  loads  or  driving  into  short  circuits.  Current  limiting is achieved in two stages: internal circuitry monitors the driver output current and detects when the peak current rises	above	2A.	When	the	2A	limit	is	exceeded,	internal protection circuitry is immediately enabled, reducing the output current and regulating it to the 1.4A (typ) currentlimit  threshold.  The  device  monitors  the  driver  current on a cycle-by-cycle basis, and the driver output current is regulated to the current-limit threshold until the short is removed.

## Table 2. Output Configurations

| CONFIGURATION        | D2        | D3        | D4            | D5            | C3        | C4            | R2            |
|----------------------|-----------|-----------|---------------|---------------|-----------|---------------|---------------|
| Full-wave rectifier  | Installed | Installed | Installed     | Installed     | Installed | 0Ω resistor   | Not installed |
| Bipolar outputs      | Installed | Installed | Installed     | Installed     | Installed | Installed     | Installed     |
| Push-pull rectifier* | Installed | Installed | Not installed | Not installed | Installed | Not installed | 0Ω            |

* Default position.

## Table 3. Available Transformers for the MAX13253

| PART          | TURNS RATIO   | ISOLATION VOLTAGE   |
|---------------|---------------|---------------------|
| TGM-H240V8LF  | 1CT:1.3CT     | 1500V RMS           |
| TGM-H260V8LF  | 1CT:2CT       | 1500V RMS           |
| TGM-H280V8LF  | 1CT:2.67CT    | 1500V RMS           |
| TGMR-H540V8LF | 1CT:1.375CT   | 4500V RMS           |
| TGMR-H560V8LF | 1CT:2CT       | 4500V RMS           |
| TGMR-H580V8LF | 1CT:2.67CT    | 4500V RMS           |

The  device  can  dissipate  large  amounts  of  power during overcurrent limiting, causing the IC to enter thermal shutdown.	Ensure	that	the	expected	maximum	operating current is less than 1A for continuous operation.

## Evaluating Other Transformer Configurations

The  EV  kit  PCB  layout  provides  an  easy  method  to reconfigure transformer TX1 secondary windings for other configurations,  including  bipolar  outputs  and  full-wave rectifier.  Use  Table  2  to  reconfigure  the  EV  kit  for  the appropriate output configuration.

## Using the MAX13253EVKIT with Other Transformers

The	 EV	 kit	 comes	 with	 the	 1CT:1.3CT	 TGM-H240V8LF transformer  from  Halo  Electronics  installed  on  TX1,  but the EV kit can also be used with other transformers. Table 3 is a list of available transformers from Halo Electronics designed for the MAX13253 that have other winding-ratios and/or higher isolation ratings. Contact Halo Electronics to obtain samples of any of these transformers.

Note that the EV kit is designed for 4500V RMS isolation operation, with 600 mils (15.24mm) spacing between the primary  ground  (GND)  and  secondary  ground  (SGND) planes.  Test  points  GND  and  SGND  are  provided  on the PCB for probing the respective ground planes, or to connect the  GND  and  SGND  planes  together  for non-isolated evaluation of the circuit.

<!-- image -->

Figure 1. MAX13253 EV Kit Schematic

Figure 2. MAX13253 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX13253 EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 4. MAX13253 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 5. MAX13253 EV Kit PCB Layout-GND

<!-- image -->

## Evaluates: MAX13253

Figure 6. MAX13253 EV Kit PCB Layout-PWR

<!-- image -->

Figure 7. MAX13253 EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX13253EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX13253

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/13            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	specifications	without	notice	at	any	time.

Evaluates: MAX13253