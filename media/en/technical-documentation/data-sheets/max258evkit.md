<!-- lastmod 2022-08-02 -->
## MAX258 Evaluation Kit

## General Description

The MAX258 evaluation kit (EV kit) is a fully assembled and tested PCB that demonstrates the MAX258 push-pull transformer driver. The EV kit operates from a single 3.0V to  5.5V  supply  and  the  on-board  1CT:1.3CT  turns-ratio transformer sets the output voltage.

The  EV  kit  provides  up  to  90%  overall  efficiency  at 5V  with  up  to  2.3W  output  power  using  a  push-pull isolated DC-DC converter. Undervoltage lockout and thermal  shutdown  provide  for  a  robust  isolated  supply.  The surface-mount transformer provides galvanic isolation with the output powered from a push-pull rectifier circuit, reducing the output-voltage ripple.

The EV kit circuit is configured as a push-pull rectifier, with an output voltage that follows the input voltage. The EV kit is also configurable for other topologies including bipolar outputs and full-wave rectification.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| C1, C2        |     2 | 1.0µF ±10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E105K |
| C3, C5        |     2 | 10µF ±10%, 25V X7R ceramic capacitors (1206) Murata GRM31CR71E106K  |
| C4            |     0 | Not installed, ceramic capacitor (1206)                             |
| D1, D2        |     2 | 30V, 2A Schottky diodes (SMA) Diodes Inc. B230A-13-F                |
| D3, D4        |     0 | Not installed, Schottky diodes (SMA)                                |
| J1, J2        |     2 | 3-pin headers                                                       |

## Component Suppliers

| SUPPLIER                                | PHONE        | WEBSITE                     |
|-----------------------------------------|--------------|-----------------------------|
| Diodes Incorporated                     | 972-987-3900 | www.diodes.com              |
| Halo Electronics, Inc.                  | 650-903-3800 | www.haloelectronics.com     |
| Murata Electronics, North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note:

Indicate that you are using the MAX258 when contacting these component suppliers.

Evaluates: MAX258

## Features and Benefits

- 3.0V	to	5.5V	Operating	Voltage	Range
- Up	to	90%		Efficiency
- Push-Pull	Rectified	Output
- Configurable	Bipolar	Outputs	or	Full-Wave	Rectifier
- Proven	PCB	Layout
- Fully	Assembled	and	Tested

Ordering Information appears at end of data sheet.

| DESIGNATION   |   QTY | DESCRIPTION                                                       |
|---------------|-------|-------------------------------------------------------------------|
| R1            |     1 | 0Ω ±5% resistor (0603)                                            |
| R2            |     1 | 1kΩ ±5% resistor (0603)                                           |
| TX1           |     1 | 1CT:1.3CT turns-ratio transformer (8 Gull Wing) Halo TGM-H240V8LF |
| U1            |     1 | 500mA push-pull transformer driver (8 TDFN-EP*) Maxim MAX258ATA+  |
| -             |     2 | Shunts                                                            |
| -             |     1 | PCB: MAX258 EVKIT                                                 |

* EP = Exposed pad.

<!-- image -->

## Quick Start

## Required Equipment

- MAX258	EV	kit
- 5.0V,	1A	DC	power	supply
- Electronic	load	capable	of	500mA
-  Ammeter
- Voltmeter

## Procedure

The	EV	kit	is	fully	assembled	and	tested.	Follow	the	steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify  that  jumpers  J1  and  J2  are  in  their  default positions, as shown in Table 1.
- 2) Set the DC power supply to 5.0V.
- 3) Set  the  electronic  load  to  300mA  and  disable  the output.
- 4) Connect	 the	 voltmeter	 between	 the	 +VOUT	 and SGND PCB pads on the EV kit.
- 5) Connect	the	ammeter	between	the	+VOUT	PCB	pad on the EV kit and the positive terminal on the electronic load. The negative terminal on the electronic load is connected to the SGND PCB pad on the EV kit.
- 6) Connect  the  power  supply  between  the  VDD  and GND PCB pads on the EV kit.
- 7) Turn	on	the	power	supply.
- 8) Enable the electronic load.

## Table 1. Jumper Description Table (J1, J2)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                       |
|----------|------------------|---------------------------------------------------|
| J1       | 1-2              | EN connected to V DD .                            |
| J1       | 2-3*             | EN connected to GND. Device enabled.              |
| J2       | 1-2              | HICLK connected to V DD . T1/T2 switch at 600kHz. |
| J2       | 2-3*             | HICLK connected to GND. T1/T2 switch at 250kHz.   |

Evaluates: MAX258

- 9) Verify that the ammeter reads approximately 300mA.
- 10)  Verify that the voltmeter reads approximately 5.5V.

## Detailed Description

The MAX258 EV kit is an isolated push-pull DC-DC converter that provides an unregulated output with respect to the isolated ground. The maximum load is limited by the device and winding ratio of the transformer.

The  device  is  an  integrated  primary-side  controller  and push-pull  driver  for  isolated  power-supply  circuits.  The device contains an on-board oscillator, protection circuitry, and	internal	MOSFETs	to	provide	up	to	500mA	of	current to the transformer's primary winding.

The  device  operates  from  a  single-supply  voltage  and includes	 UVLO	 and	 an	 active-low	 enable	 input	 for controlled startup. If the input voltage at V DD  falls below 2.55V, or the EN input  is  pulled  above  2.0V,  the  device shuts down and T1 and T2 are high impedance.

## Using the Internal Oscillator

The device  includes  an  internal  oscillator  with  a  guaranteed  50%  duty  cycle.  Place  a  shunt  across  pins  1-2  on jumper J2 to set the T1/T2 switching frequency to 600kHz (typ). Place a shunt across pins 2-3 on J2 to set the T1/T2 switching frequency to 250kHz (typ).

## Evaluating Other Transformer Configurations

The  EV  kit  PCB  layout  provides  an  easy  method  to reconfigure transformer TX1 secondary windings for other configurations,  including  bipolar  outputs  and  full-wave rectifier.  Use  Table  2  to  reconfigure  the  EV  kit  for  the appropriate output configuration.

│

## MAX258 Evaluation Kit

## Using the MAX258 EV Kit with Other Transformers

The	 EV	 kit	 comes	 with	 the	 1CT:1.3CT	 TGM-H240V8LF transformer  from  Halo  Electronics  installed  on  TX1,  but the EV kit can also be used with other transformers. Table 3 is a list of available transformers from Halo Electronics designed for the MAX258 that have other winding-ratios and/or higher isolation ratings. Contact Halo Electronics to obtain samples of any of these transformers.

## Table 2. Output Configurations

| CONFIGURATION        | D1        | D2        | D3            | D4            | C3        | C4            | R1            |
|----------------------|-----------|-----------|---------------|---------------|-----------|---------------|---------------|
| Full-wave rectifier  | Installed | Installed | Installed     | Installed     | Installed | 0Ω resistor   | Not installed |
| Bipolar outputs      | Installed | Installed | Installed     | Installed     | Installed | Installed     | Installed     |
| Push-pull rectifier* | Installed | Installed | Not installed | Not installed | Installed | Not installed | 0Ω            |

## Table 3. Available Transformers for the MAX258

| PART          | TURNS RATIO   | ISOLATION VOLTAGE   |
|---------------|---------------|---------------------|
| TGM-H240V8LF  | 1CT:1.3CT     | 1500V RMS           |
| TGM-H260V8LF  | 1CT:2CT       | 1500V RMS           |
| TGM-H280V8LF  | 1CT:2.67CT    | 1500V RMS           |
| TGMR-H540V8LF | 1CT:1.375CT   | 4500V RMS           |
| TGMR-H560V8LF | 1CT:2CT       | 4500V RMS           |
| TGMR-H580V8LF | 1CT:2.67CT    | 4500V RMS           |

│

Evaluates: MAX258

Note that the EV kit is designed for 4500V RMS isolation operation, with 600 mils (15.24mm) spacing between the primary  ground  (GND)  and  secondary  ground  (SGND) planes.  Test  points  GND  and  SGND  are  provided  on the PCB for probing the respective ground planes, or to connect the  GND  and  SGND  planes  together  for non-isolated evaluation of the circuit.

<!-- image -->

Figure 1. MAX258 EV Kit Schematic

Figure 2. MAX258 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX258 EV Kit Component Placement GuideSolder Side

<!-- image -->

│

Figure 4. MAX258 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 5. MAX258 EV Kit PCB Layout-GND

<!-- image -->

## Evaluates: MAX258

Figure 6. MAX258 EV Kit PCB Layout-PWR

<!-- image -->

Figure 7. MAX258 EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART         | TYPE   |
|--------------|--------|
| MAX258EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX258

## MAX258 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/13            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Ma[im	Integrated	reserves	the	right	to	change	the	circuitry	and	specifications	without	notice	at	any	time.

│

Evaluates: MAX258