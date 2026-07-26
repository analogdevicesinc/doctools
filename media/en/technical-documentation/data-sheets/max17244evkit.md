<!-- lastmod 2022-08-02 -->
## MAX17244 Evaluation Kit

## General Description

The  MAX17244  evaluation  kit  (EV  kit)  demonstrates the  MAX17244  high-voltage,  current-mode  step-down converter with low operating current. The EV kit operates over a wide 6V to 36V input range and the output is set for  5V  at  2.5A.  The  EV  Kit  switching  frequency  is  set  at 1.66MHz

The EV kit comes with the MAX17244ETESA+ installed.

## Features

- Wide 6V to 36V Input Supply Range
- Forced-PWM or Skip-Mode Operation
- Configurable Switching Frequency
- Current-Mode Controller with Force-PWM and Skip Modes
- 86% Peak Efficiency at 12V Input in Skip-Mode
- 89% Peak Efficiency at 12V Input in Forced-PWM
- FSYNC Input and Power-Good Output
- Proven 4-Layer 2oz Copper PCB Layout
- Demonstrates 1065mil x 795mil Solution Size
- Fully Assembled and Tested

## Table 1. EN Configuration (JU1)

| SHUNT POSITION   | DESCRIPTION                                                     |
|------------------|-----------------------------------------------------------------|
| 1-2*             | Connects the EN pin to the voltage at SUP for normal operation. |
| 2-3              | Connects the EN pin to ground to enter shutdown mode.           |

* Default position.

## Table 2. Mode of Operation (JU2)

| SHUNT POSITION   | MODE PIN                       | MODE                                                |
|------------------|--------------------------------|-----------------------------------------------------|
| 1-2*             | Connected to BIAS              | Forced-PWM mode                                     |
| 2-3              | Connected to AGND              | Skip mode                                           |
| Not installed    | Connected to an external clock | Forced-PWM mode (device syncs to an external clock) |

Evaluates: MAX17244

## Quick Start

## Required Equipment

- MAX17244	EV	kit
- 14V,	1A	DC	power	supply
- Electronic	load	capable	of	2.5A
- Digital	voltmeter	(DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on supplies until all connections are completed.

- 1)  Verify  that  jumpers  JU1  and  JU2  are  in  their  default positions, as shown in Table 1 and Table 2.
- 2)  Connect the power supply between the EXT\_VBAT and nearest PGND banana jacks.
- 3)  Connect the 2.5A electronic load between the OUT and nearest PGND banana jacks.
- 4)  Connect the DVM between the OUT and nearest PGND banana jacks.
- 5)  Turn on the power supply.
- 6)  Enable the electronic load.
- 7)  Verify that the voltage  at the OUT  test  point  is approximately 5V.

Note: When a high input voltage or high load current is applied continuously, an external cooling fan may be required to prevent MAX17244 from shutting down due to overtemperature.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX17244 Evaluation Kit

## Detailed Description of Hardware

The  EV  kit  demonstrates  the  MAX17244  high-voltage, high-frequency,  step-down  converter  with  low  operating current. The EV kit operates over a wide 6V to 36V input range and the output is set for 5V at 2.5A.

## Enable (EN)

Place a shunt in the 1-2 position on jumper JU1 for normal operation. To place the device into shutdown mode, move the shunt on JU1 to the 2-3 position.

## Synchronization Input (FSYNC)

The EV kit features jumper JU2 to control the synchronization input (FSYNC). Connect FSYNC to AGND to enable skipmode operation. Connect to BIAS or to an external clock to enable fixed-frequency forced-PWM mode operation.

The  device  can  be  synchronized  to  an  external  signal applied  to  FSYNC.  To  use  an  external  clock,  uninstall the shunt on JU2 and apply the signal at the FSYNC test point.  The  external  clock  frequency  at  FSYNC  can  be higher  or  lower  than  the  internal  clock  by  20%.  Ensure that  the  duty  cycle  of  the  external  clock  used  has  a minimum 100ns pulse width.

## Synchronizing Output (SYNCOUT)

The  EV  kit  provides  a  test  point  EXT\_5V  to  pull  up the  open-drain  SYNCOUT  to  an  external  5V  supply. SYNCOUT is a 180° out-of-phase clock output relative to the internal oscillator at SYNCOUT to create cascaded power supplies with multiple MAX17244s.

## Component Suppliers

| SUPPLIER                       | WEBSITE             |
|--------------------------------|---------------------|
| Murata Americas                | www.murata.com      |
| Panasonic Corp.                | www.panasonic.com   |
| Würth Electronik GmbH & Co. KG | www.we-online.com   |
| Samsung Electromechanics       | www.samsungsem.com  |
| Taiyo Yuden                    | www.taiyo-yuden.com |
| NXP Semiconductors             | www.nxp.com         |

Note: Indicate that you are using the MAX17244 when contacting these component suppliers.

Evaluates: MAX17244

## Setting the Switching Frequency (FOSC)

The EV kit switching frequency is set to 1.66MHz by the resistor,  R FOSC   (R2),  connected  from  F OSC   to  AGND. Refer to the Internal Oscillation section in the MAX17244 IC data sheet for the equation and/or a graphical approach to selecting the correct R FOSC  (R2) value.

## Power-Good Output ( PGOOD )

The  EV  kit  provides  a PGOOD test  point  to  monitor  the status of the device output. PGOOD asserts when V OUT rises above  95%  of  its  regulation voltage. PGOOD deasserts when V OUT  drops below 92% of its regulation voltage.

## Output

Connect  FB  to  BIAS  for  a  fixed  +5V  (EV  kit  default output) output voltage. To set the output to other voltages between 1V and 10V, remove R12 and connect a resistive-divider from output (OUT) to FB to AGND. Use the following formula to determine the R4 and R6 of the resistive-divider network:

<!-- formula-not-decoded -->

where V FB  = 1V.

│

## MAX17244 Evaluation Kit

## MAX17244 EV Kit Bill of Materials

| Part Number                                      | 5001                                             | 5000   | EEE-TG1H470UP UMK316AB7475KL GCM188R71H104KA57D                                          | CL31B226KPHNNNE GRM188R71A225K                                             | GRM155R71H102K GRM1555C1H100J                   | GRM155R71C104K PMEG6030ETP 108-0740-001       | PEC36SAAN   | Any                                                  | SX1100-B MAX17244ETESA+ MAX17244 EV KIT   | Any                           |              | 744311220 Any   | Any                     | Any                       | Any                          |                 |                 |                                                         |      |                                |      |                        |           |                       |                     |          |             |         |         |        |                 | Any   |      |                 |       |      |      |            |           |
|--------------------------------------------------|--------------------------------------------------|--------|------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|-------------------------------------------------|-----------------------------------------------|-------------|------------------------------------------------------|-------------------------------------------|-------------------------------|--------------|-----------------|-------------------------|---------------------------|------------------------------|-----------------|-----------------|---------------------------------------------------------|------|--------------------------------|------|------------------------|-----------|-----------------------|---------------------|----------|-------------|---------|---------|--------|-----------------|-------|------|-----------------|-------|------|------|------------|-----------|
| Manufacturer                                     | Keystone Keystone                                |        | Panasonic Taiyo Yuden Murata                                                             | Murata Samsung Electro                                                     | Murata NXP                                      | Murata Murata                                 | JOHNSON     | Any                                                  | Wurth Electronics                         | Any                           | SULLINS      |                 | Any                     | Any                       | Any                          | Any             |                 |                                                         |      |                                |      |                        |           |                       |                     |          |             | CMR     |         |        |                 | Any   |      |                 | Kycon |      |      | Maxim      |           |
| Qty Reference Designators 5 AGND (2x), PGND (3x) | 7 BIAS, EXT_SUP, EXT_5V, FSYNC, /PGOOD\, SYNCOUT | LX,    | 1 C1 2 C2, C4 2 C3, C5                                                                   | 1 C6 2 C7, C8                                                              | 1 C10                                           | 1 C12 1 C13                                   | 1 D1        | 1 L1 1 R1                                            | 1 R5 1                                    | 3 R9, R10,                    | R12          | 2 SU1, SU2 1 U1 |                         | 1 2 oz. Cu                | 0 C14, C15                   | 1 R3            | 1 R2            |                                                         | R8   | EXT_VBAT, OUT, PGND 2 JU1, JU2 | (2x) |                        |           |                       |                     |          | 1 R11       |         |         |        | 0 R4, R6, R7    |       |      | 0 R13           |       |      |      |            |           |
| Component Description Testpoints,                | Testpoints, Red                                  |        | capacitor (8x10.2mm) 10%, 50V X7R ceramic capacitor (1206) 10%, ceramic capacitor (0603) | 0.1uF ceramic capacitor (0402) 22uF 10%, 10V X7R ceramic capacitors (1206) | ceramic capactor (0603) capacitor (0402) (0402) |                                               | 4           | MOUNT 2.54mm, Comes in 36-40 Pin Strips (CUT TO FIT) | 2.2uH, 13A                                | 16.5k ohms 1% resistor (0402) | pin headers, | ohms            | ohms 5% resistor (0402) | 0 ohms 5% resistor (0402) | 100k ohms 5% resistor (0402) | 10k ohms (0402) |                 | 60V Schottky diode (SOD128) BANNANA, UNINSULATED, PANEL | ohms |                                |      | inductor (7mm x 6.9mm) |           |                       |                     |          |             |         |         | (0402) |                 |       |      |                 |       |      |      | 5x5x0.8mm) |           |
| Black                                            |                                                  |        | aluminum electrolytic 50V X7R                                                            | 10%, 16V X7R                                                               | 10%, 10V X7R                                    | 10% 50V X7R ceramic 50V C0G ceramic capacitor |             |                                                      |                                           |                               |              |                 |                         |                           |                              |                 | resistor (0402) |                                                         |      |                                |      |                        |           | MAX17244 EV capacitor | (16 TQFN-EP         |          | (1210)      | ceramic | KIT     |        | resistor (0402) |       |      | resistor (0603) |       |      |      |            |           |
|                                                  |                                                  |        | 20%, 50V                                                                                 |                                                                            |                                                 |                                               |             |                                                      |                                           | 5%                            |              |                 |                         |                           |                              |                 | 1%              |                                                         |      |                                |      |                        |           | installed,            | Step-down Converter | resistor | 5% resistor |         | board:  |        | installed,      |       |      | installed,      |       |      |      |            |           |
|                                                  |                                                  |        | 47uF 4.7uF 0.1uF                                                                         |                                                                            | 2.2uF                                           | 1000pF 10pF                                   | 5%          | JACKs,                                               | 3                                         | 1k                            |              |                 | 0                       |                           |                              | 0016            |                 |                                                         | 0018 | 0013                           | 3A,  | 20k                    | Shunts PC | Not                   | 0023                | 0017     | 0019        |         | Not Not |        |                 |       |      |                 |       |      |      |            |           |
| Item 0001                                        | 0002                                             |        | 0004 0005                                                                                | 0006                                                                       | 0008                                            | 0009                                          | 0011        |                                                      |                                           |                               |              |                 |                         |                           |                              |                 |                 | 0012                                                    |      |                                |      | 0014                   |           | 0025                  |                     |          |             |         | 0024    |        |                 |       |      |                 |       |      |      |            |           |
|                                                  |                                                  |        |                                                                                          |                                                                            |                                                 |                                               |             |                                                      |                                           |                               |              |                 |                         |                           |                              |                 |                 |                                                         |      |                                |      |                        |           |                       |                     |          |             |         |         |        |                 |       | 0021 |                 |       |      |      |            |           |
|                                                  |                                                  |        |                                                                                          |                                                                            |                                                 |                                               |             |                                                      |                                           |                               |              |                 |                         |                           |                              |                 |                 |                                                         |      |                                |      | 0015                   |           |                       |                     |          |             |         |         |        |                 |       |      |                 |       |      |      |            |           |
|                                                  |                                                  |        |                                                                                          | 0007                                                                       |                                                 |                                               |             | 0010                                                 |                                           |                               |              |                 |                         |                           |                              |                 |                 |                                                         |      |                                |      |                        |           |                       |                     |          |             |         |         |        |                 |       |      | 0028            |       | 0026 | 0027 |            | 0020 0022 |
|                                                  |                                                  |        | 0003                                                                                     |                                                                            |                                                 |                                               |             |                                                      |                                           |                               |              |                 |                         |                           |                              |                 |                 |                                                         |      |                                |      |                        |           |                       |                     |          |             |         |         |        |                 |       |      |                 |       |      |      |            |           |

Evaluates: MAX17244

## MAX17244 EV Kit PCB Layout Diagrams

MAX17244 EV Kit-Top Silkscreen

<!-- image -->

MAX17244 EV Kit-Layer 2

<!-- image -->

MAX17244 EV Kit-Top

<!-- image -->

MAX17244 EV Kit-Layer 3

<!-- image -->

│

## MAX17244 EV Kit PCB Layout Diagrams (continued)

MAX17244 EV Kit-Bottom

<!-- image -->

MAX17244 EV Kit-Bottom Silkscreen

<!-- image -->

│

## MAX17244 EV Kit Schematic

<!-- image -->

## MAX17244 EV Kit Minimal Component Schematic

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17244EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX17244

## MAX17244 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                     | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------------------|-----------------|
|                 0 | 3/16            | Initial release                                                                 | -               |
|                 1 | 3/17            | Updated General Description and Setting the Switching Frequency (FOSC) sections | 1-2             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Ma[im	,ntegrated	reserves	tKe	rigKt	to	cKange	tKe	circuitry	and	speci¿cations	witKout	notice	at	any	time.

│

Evaluates: MAX17244