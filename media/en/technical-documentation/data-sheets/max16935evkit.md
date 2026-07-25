<!-- lastmod 2022-08-02 -->
## MAX16935 Evaluation Kit

## General Description

The  MAX16935  evaluation  kit  (EV  kit)  demonstrates the  MAX16935  high-voltage,  current-mode  step-down converter with low operating current. The EV kit operates over a wide 3.5V to 36V input range and the output is set for 5V at 3.5A.

The EV kit comes with the MAX16935RAUE/V+ installed.

## Features and Benefits

- Wide 3.5V to 36V Input Supply Range
- Forced-PWM or Skip-Mode Operation
- Programmable Switching Frequency
- Power-Good Output
- Proven PCB Layout
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX16935	EV	kit
- 14V,	3A	DC	power	supply
- Electronic	load	capable	of	3.5A
- Digital	voltmeter	(DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on supplies until all connections are made.

- 1)  Verify  that  jumpers  JU1  and  JU2  are  in  their  default positions, as shown in Tables 1 and 2.

Ordering Information appears at end of data sheet.

Evaluates: MAX16935

- 2)  Connect  the  power  supply  between  the  EXT\_VBAT and	nearest	PGND	test	points.
- 3)  Connect  the  3.5A  electronic  load  between  the  OUT and	nearest	PGND	test	points.
- 4)  Connect	 the	 DVM	 between	 the	 OUT	 and	 nearest PGND	test	points.
- 5)  Turn on the power supply.
- 6)  Enable the electronic load.
- 7)  Verify that the voltage at the OUT test point is approximately 5V.

## Table 1. EN Configuration (JU1)

| SHUNT POSITION   | DESCRIPTION                                                     |
|------------------|-----------------------------------------------------------------|
| 1-2*             | Connects the EN pin to the voltage at SUP for normal operation. |
| 2-3              | Connects the EN pin to ground to enter shutdown mode.           |

## Table 2. Mode of Operation (JU2)

| SHUNT POSITION   | MODE PIN                       | MODE                                                 |
|------------------|--------------------------------|------------------------------------------------------|
| 1-2*             | Connected to BIAS              | Forced-PWM mode (device syncs to the internal clock) |
| 2-3              | Connected to AGND              | Skip mode                                            |
| Not installed    | Connected to an external clock | Forced-PWM mode (device syncs to an external clock)  |

<!-- image -->

## MAX16935 Evaluation Kit

## Detailed Description of Hardware

The  EV  kit  demonstrates  the  MAX16935  high-voltage, high-frequency,  step-down  converter  with  low  operating current. The EV kit operates over a wide 3.5V to 36V input range and the output is set for 5V at 3.5A.

## Enable (EN)

Place a shunt in the 1-2 position on jumper JU1 for normal operation. To place the device into shutdown mode, move the shunt on JU1 to the 2-3 position.

## Synchronization Input (FSYNC)

The EV kit features jumper JU2 to control the synchronization  input  (FSYNC).  The  device  synchronizes  to  an external  signal  applied  to  FSYNC.  Connect  FSYNC  to AGND	to	enable	skip-mode	operation.	Connect	to	BIAS or to an external clock to enable fixed-frequency forcedPWM mode operation.

To use an external clock, uninstall the shunt on JU2 and apply  the  signal  at  the  FSYNC  test  point.  The  external clock frequency at FSYNC can be higher or lower than the internal clock by 20%. Ensure that the duty cycle of the external clock used has a minimum 100ns pulse width.

## Synchronizing Output (SYNCOUT)

The EV kit provides jumper JU3 to pull up the open-drain SYNCOUT to the OUT voltage. SYNCOUT is a 180° out-

## Evaluates: MAX16935

of-phase  clock  output  relative  to  the  internal  oscillator at  SYNCOUT  to  create  cascaded  power  supplies  with multiple MAX16935s.

## Setting the Switching Frequency (FOSC)

The EV kit switching frequency is set by a resistor, R FOSC (R2),	connected	from	FOSC	to	AGND.	Refer	to	Figure	3. in the MAX16935 IC data sheet for a graphical approach of selecting the correct R FOSC  (R2) value.

## Power-Good Output (PGOOD)

The	 EV	 kit	 provides	 a	 PGOOD	 test	 point	 to	 monitor	 the status	of	the	device	output.	PGOOD	asserts	when	VOUT rises above	 95%	 of	 its	 regulation	 voltage.	 PGOOD deasserts when VOUT drops below 92% of its regulation voltage.

## Output

Connect  FB  to  BIAS  for  a  fixed  +5V  (EV  kit  default output) or a fixed +3.3V output voltage. To set the output to other voltages between 1V and 10V, connect a resistive	divider	from	output	(OUT)	to	FB	to	AGND.	Use	the following	formula	to	determine	the	R4	and	R6 of the resistive divider network:

<!-- formula-not-decoded -->

where V FB  = 1V.

## MAX16935 Evaluation Kit

## Component List

| DESIGNATION                                         |   QTY | DESCRIPTION                                                                               |
|-----------------------------------------------------|-------|-------------------------------------------------------------------------------------------|
| AGND, PGND (x4)                                     |     5 | Black test points                                                                         |
| BIAS, EXT_SUP, EXT_VBAT, FSYNC, OUT, PGOOD, SYNCOUT |     7 | Red test points                                                                           |
| C1                                                  |     1 | 47µF ±20%, 50V aluminum electrolytic capacitor (8.00mm x 10.20mm) Panasonic EEE-TG1H470UP |
| C2, C4                                              |     2 | 4.7µF ±10%, 50V X7R ceramic capacitors (1210) Murata GCM32ER71H475KA55L                   |
| C3, C5                                              |     2 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) Murata GCM188R71H104KA57D                   |
| C6                                                  |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0402) Murata GRM155R71C104K                        |
| C7, C8                                              |     2 | 22µF ±10%, 10V X7R ceramic capacitors (1210) Murata GCM32ER71A226KE12L                    |
| C10                                                 |     1 | 2.2µF ±10%, 10V X7R ceramic capacitor (0603) Murata GRM188R71A225K                        |
| C12                                                 |     1 | 1000pF ±10%, 50V X7R ceramic capacitor (0402) Murata GRM155R71H102K                       |

## Component Suppliers

| SUPPLIER                       | PHONE        | WEBSITE                |
|--------------------------------|--------------|------------------------|
| Diodes Incorporated            | 805-446-4800 | www.diodes.com         |
| Murata Americas                | 770-436-1300 | www.murataamericas.com |
| Panasonic Corp.                | 800-344-2112 | www.panasonic.com      |
| Würth Electronik GmbH & Co. KG | 201-785-8800 | www.we-online.com      |

Note: Indicate that you are using the MAX16935 when contacting these component suppliers.

Evaluates: MAX16935

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| C13           |     1 | 10pF ±5%, 50V C0G ceramic capacitor (0402) Murata GRM1555C1H100J      |
| C14           |     1 | 470pF ±1%, 50V C0G ceramic capacitor (0402) Murata GCM1555C1H471FA16# |
| C15           |     0 | Not installed, ceramic capacitor Murata GRM1555C1H100J                |
| D1            |     1 | 3A, 60V Schottky diode (SMB) Diodes Inc. B360B-13-F                   |
| JU1, JU2      |     2 | 3-pin headers                                                         |
| JU3           |     1 | 2-pin header                                                          |
| L1            |     1 | 2.2µH, 13A inductor (7mm x 6.9mm) Würth 744311220                     |
| LX            |     0 | Not installed, red test point                                         |
| R1            |     1 | 20kΩ ±1% resistor (0402)                                              |
| R2            |     1 | 12.1kΩ ±1% resistor (0402)                                            |
| R3            |     1 | 10kΩ ±5% resistor (0402)                                              |
| R4, R6        |     0 | Not installed, resistors (0402)                                       |
| R5            |     1 | 100Ω ±5% resistor (0402)                                              |
| R7            |     1 | 2Ω ±1% resistor (0402)                                                |
| R8            |     1 | 0Ω ±5% resistor (1210)                                                |
| R9, R10, R12  |     3 | 0Ω ±5% resistors (0402)                                               |
| R11           |     1 | 100kΩ ±5% resistor (0402)                                             |
| U1            |     1 | Automotive buck converter (16 TSSOP-EP*) Maxim MAX16935RAUE/V+        |
| -             |     3 | Shunts                                                                |
| -             |     1 | PCB: MAX16935 EVALUATION KIT                                          |

5(9

'(6&amp;

/75

=21(

7(67 (1*,1((5

Figure 1. MAX16935 EV Kit Schematic

<!-- image -->

+$5':$5( (1*,1((5

3&amp;% /$&lt;287 '(6,*1(5

0$;

352-(&amp;7 7,7/(

'5$:,1* 7,7/(

ART FILM - SILK\_TOP

Figure 2. MAX16935 EV Kit Component Placement GuideComponent Side

<!-- image -->

ART FILM - SILK\_TOP

<!-- image -->

ART FILM - TOP

Figure 3. MAX16935 EV Kit PCB Layout-Component Side ART FILM - TOP

ART FILM - LAYER2

Figure 4. MAX16935 EV Kit PCB Layout-Layer 2 ART FILM - LAYER2

<!-- image -->

ART FILM - LAYER3

Figure 5. MAX16935 EV Kit PCB Layout-Layer 3 ART FILM - LAYER3

<!-- image -->

ART FILM - BOTTOM

Figure 6. MAX16935 EV Kit PCB Layout-Solder Side ART FILM - BOTTOM

<!-- image -->

ART FILM - SILK\_BOT

Figure 7. MAX16935 EV Kit Component Placement Guide-Solder Side

<!-- image -->

ART FILM - SILK\_BOT

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16935EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX16935

## MAX16935 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/14            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	speci¿cations	without	notice	at	any	time.

Evaluates: MAX16935