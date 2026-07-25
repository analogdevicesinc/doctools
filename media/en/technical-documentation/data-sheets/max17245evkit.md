<!-- lastmod 2022-08-02 -->
## MAX17245 Evaluation Kit

## General Description

The MAX17245 evaluation kit (EV kit) demonstrates the MAX17245 high-voltage, current-mode step-down converter with  low  operating  current.  The  EV  kit  operates  over  a wide 6V to 36V input range and the output is set for 5V at 3.5A.

The EV kit comes with the MAX17245ETESA+ installed.

## Features

- Wide 6V to 36V Input Supply Range
- Forced-PWM or Skip-Mode Operation
- Configurable Switching Frequency
- Current-Mode Controller with Force-PWM and Skip Modes
- 84% Peak Efficiency at 12V Input in Skip-Mode
- 88% Peak Efficiency at 12V Input in Forced-PWM
- FSYNC Input and Power-Good Output
- Proven 4-Layer 2oz Copper PCB Layout
- Demonstrates 1065mil x 795mil Solution Size
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX17245	EV	kit
- 14V,	3A	DC	power	supply
- Electronic	load	capable	of	3.5A
- Digital	voltmeter	(DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on supplies until all connections are completed.

- 1)  Verify  that  jumpers  JU1  and  JU2  are  in  their  default positions, as shown in Table 1 and Table 2.
- 2)  Connect  the  power  supply  between  the  EXT\_VBAT and nearest PGND banana jacks.
- 3)  Connect  the  3.5A  electronic  load  between  the  OUT and nearest PGND banana jacks.
- 4)  Connect  the  DVM  between  the  OUT  and  nearest PGND banana jacks.

Evaluates: MAX17245

- 5)  Turn on the power supply.
- 6)  Enable the electronic load.
- 7)  Verify  that  the  voltage  at  the  OUT  test  point  is approximately 5V.

Note: When a high input voltage or a high load current is applied continuously, an external cooling fan may be required to prevent MAX17245 from shutting down due to overtemperature.

## Table 1. EN Configuration (JU1)

| SHUNT POSITION   | DESCRIPTION                                                     |
|------------------|-----------------------------------------------------------------|
| 1-2*             | Connects the EN pin to the voltage at SUP for normal operation. |
| 2-3              | Connects the EN pin to ground to enter shutdown mode.           |

## Table 2. Mode of Operation (JU2)

| SHUNT POSITION   | MODE PIN                       | MODE                                                |
|------------------|--------------------------------|-----------------------------------------------------|
| 1-2*             | Connected to BIAS              | Forced-PWM mode                                     |
| 2-3              | Connected to AGND              | Skip mode                                           |
| Not installed    | Connected to an external clock | Forced-PWM mode (device syncs to an external clock) |

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX17245 Evaluation Kit

## Detailed Description of Hardware

The  EV  kit  demonstrates  the  MAX17245  high-voltage, high-frequency,  step-down  converter  with  low  operating current. The EV kit operates over a wide 6V to 36V input range and the output is set for 5V at 3.5A.

## Enable (EN)

Place a shunt in the 1-2 position on jumper JU1 for normal operation. To place the device into shutdown mode, move the shunt on JU1 to the 2-3 position.

## Synchronization Input (FSYNC)

The EV kit features jumper JU2 to control the synchronization input  (FSYNC).  Connect  FSYNC  to AGND  to  enable  skipmode operation. Connect to BIAS or to an external clock to enable fixed-frequency forced-PWM mode operation.

The  device  can  be  synchronized  to  an  external  signal applied  to  FSYNC.  To  use  an  external  clock,  uninstall the shunt on JU2 and apply the signal at the FSYNC test point.  The  external  clock  frequency  at  FSYNC  can  be higher  or  lower  than  the  internal  clock  by  20%.  Ensure that the duty cycle of the external clock used has a minimum 100ns pulse width.

## Synchronizing Output (SYNCOUT)

The  EV  kit  provides  a  test  point  EXT\_5V  to  pull  up the  open-drain  SYNCOUT  to  an  external  5V  supply. SYNCOUT is a 180° out-of-phase clock output relative to the  internal  oscillator  at  SYNCOUT  to  create  cascaded power supplies with multiple MAX17245s.

## Evaluates: MAX17245

## Setting the Switching Frequency (FOSC)

The EV kit switching frequency is set by a resistor, R FOSC (R2), connected from F OSC  to AGND. Refer to Figure 3 of the MAX17245 IC data sheet for a graphical approach of selecting the correct R FOSC  (R2) value.

## Power-Good Output (PGOOD)

The  EV  kit  provides  a  PGOOD  test  point  to  monitor  the status of the device output. PGOOD asserts when V OUT rises  above  95%  of  its  regulation  voltage.  PGOOD deasserts when V OUT  drops below 92% of its regulation voltage.

## Output

Connect FB to BIAS for a fixed +5V (EV kit default output) output voltage. T o set the output to other voltages between 1V  and  10V,  remove  R12  and  connect  a  resistive  divider from output (OUT) to FB to AGND. Use the following formula to determine the R4 and R6 of the resistive-divider network:

<!-- formula-not-decoded -->

where V FB  = 1V.

│

## MAX17245 Evaluation Kit

## Component Suppliers

| SUPPLIER                       | WEBSITE             |
|--------------------------------|---------------------|
| Murata Americas                | www.murata.com      |
| NXP Semiconductors             | www.nxp.com         |
| Panasonic Corp.                | www.panasonic.com   |
| Samsung Electro-mechanics      | www.samsungsem.com  |
| Taiyo Yuden                    | www.taiyo-yuden.com |
| Würth Electronik GmbH & Co. KG | www.we-online.com   |

Note: Indicate that you are using the MAX17245 when contacting these component suppliers.

## Component Information, PCB Layout, and Schematics

See the following links for component information, PCB layout diagams, and schematics.

- MAX17245 EV BOM
- MAX17245 EV PCB Layout
- MAX17245 EV Schematic
- MAX17245 EV Minimal Component Schematic

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17245EVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX17245

│

## MAX17245 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Ma[im	,ntegrated	reserves	tKe	rigKt	to	cKange	tKe	circuitry	and	speci¿cations	witKout	notice	at	any	time.

│

Evaluates: MAX17245

## MAX17245EVKIT#: Rev A

|   Item | Component Description                                         |   Qty | Reference Designators                              | Manufacturer      | Part Number         |
|--------|---------------------------------------------------------------|-------|----------------------------------------------------|-------------------|---------------------|
|   0001 | Testpoints, Black                                             |     5 | AGND (3x), PGND (2x)                               | Keystone          | 5001                |
|   0002 | Testpoints, Red                                               |     7 | BIAS, EXT_SUP, EXT_5V, FSYNC, LX, /PGOOD\, SYNCOUT | Keystone          | 5000                |
|   0003 | 47uF 20%, 50V aluminum electrolytic capacitor (8x10.2mm)      |     1 | C1                                                 | Panasonic         | EEE-TG1H470UP       |
|   0004 | 4.7uF 10%, 50V X7R ceramic capacitor (1206)                   |     2 | C2, C4                                             | Taiyo Yuden       | UMK316AB7475KL      |
|   0005 | 0.1uF 10%, 50V X7R ceramic capacitors (0603)                  |     2 | C3, C5                                             | Murata            | GCM188R71H104KA57D  |
|   0006 | 0.1uF 10%, 16V X7R ceramic capacitor (0402)                   |     1 | C6                                                 | Murata            | GRM155R71C104K      |
|   0007 | 22uF 10%, 10V X7R ceramic capacitors (1206)                   |     2 | C7, C8                                             | Samsung Electro   | CL31B226KPHNNNE     |
|   0008 | 2.2uF 10%, 10V X7R ceramic capactor (0603)                    |     1 | C10                                                | Murata            | GRM188R71A225K      |
|   0009 | 1000pF 10% 50V X7R ceramic capacitor (0402)                   |     1 | C12                                                | Murata            | GRM155R71H102K      |
|   0010 | 10pF 5% 50V C0G ceramic capacitor (0402)                      |     1 | C13                                                | Murata            | GRM1555C1H100J      |
|   0011 | 470pF 1% 50V C0G ceramic capacitor (0402)                     |     1 | C14                                                | Murata            | GCM1555C1H471FA16#J |
|   0012 | 3A, 60V Schottky diode (SOD128)                               |     1 | D1                                                 | NXP               | PMEG6030ETP         |
|   0013 | JACKs, BANNANA, UNINSULATED, PANEL MOUNT                      |     4 | EXT_VBAT, OUT, PGND (2x)                           | JOHNSON           | 108-0740-001        |
|   0014 | 3 pin headers, 2.54mm, Comes in 36-40 Pin Strips (CUT TO FIT) |     2 | JU1, JU2                                           | SULLINS           | PEC36SAAN           |
|   0015 | 2.2uH, 13A inductor (7mm x 6.9mm)                             |     1 | L1                                                 | Wurth Electronics | 744311220           |
|   0016 | 20k ohms 1% resistor (0402)                                   |     1 | R1                                                 | Any               | Any                 |
|   0017 | 16.5k ohms 1% resistor (0402)                                 |     1 | R2                                                 | Any               | Any                 |
|   0018 | 10k ohms 5% resistor (0402)                                   |     1 | R3                                                 | Any               | Any                 |
|   0019 | 1k ohms 5% resistor (0402)                                    |     1 | R5                                                 | Any               | Any                 |
|   0020 | 2 ohms 1% resistor (0402)                                     |     1 | R7                                                 | Any               | Any                 |
|   0021 | 0 ohms 5% resistor (1210)                                     |     1 | R8                                                 | Any               | Any                 |
|   0022 | 0 ohms 5% resistors (0402)                                    |     3 | R9, R10, R12                                       | Any               | Any                 |
|   0023 | 100k ohms 5% resistor (0402)                                  |     1 | R11                                                | Any               | Any                 |
|   0024 | Shunts                                                        |     2 | SU1, SU2                                           | Kycon             | SX1100-B            |
|   0025 | Step-down Converter (16 TQFN-EP 5x5x0.8mm)                    |     1 | U1                                                 | Maxim             | MAX17245ETESA+      |
|   0026 | PC board: MAX17245 EV KIT                                     |     1 | 2 oz. Cu                                           | CMR               | MAX17245 EV KIT     |
|   0027 | Not installed, ceramic capacitor (0402)                       |     0 | C15                                                |                   |                     |
|   0028 | Not installed, resistors (0402)                               |     0 | R4, R6                                             |                   |                     |
|   0029 | Not installed, resistors (0603)                               |     0 | R13                                                |                   |                     |
|   0030 | Maxim pads                                                    |     0 | EXT_VBAT, OUT, PGND (2x)                           |                   |                     |

Top Silkscreen

<!-- image -->

Top

<!-- image -->

<!-- image -->

Layer 2

<!-- image -->

Layer 3

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## Bottom

Bottom Silkscreen

<!-- image -->

<!-- image -->

Schematic

<!-- image -->

Minimal Component Schematic

<!-- image -->