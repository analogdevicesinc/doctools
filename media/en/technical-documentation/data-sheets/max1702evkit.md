<!-- lastmod 2022-08-04 -->
## General Description

The MAX1702 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that demonstrates the MAX1702B power-management IC. The IC is optimized for microprocessor-based applications. The MAX1702B integrates three high-performance step-down DC-DC power supplies with associated supervisory and management functions. The first power supply (VI/O) is configured for 3.3V and provides up to 900mA. The second power supply (VCORE) is configured for 1.1V and provides up to 400mA. The third power supply (VMEM) can be configured to 1.8V, 2.5V, or 3.3V and provides up to 800mA. Power management functions include automatic power-up sequencing, power-on reset, manual reset with timer, and two levels of low-battery detection.

The EV kit operates with a 2.6V to 5.5V input voltage range, allowing the use of batteries or a regulated DC power supply at the input.

| DESIGNATION     |   QTY | DESCRIPTION                                                                                     |
|-----------------|-------|-------------------------------------------------------------------------------------------------|
| C1              |     1 | 4.7µF ±20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J475KT or Taiyo Yuden JMK212BJ475MG  |
| C2, C3, C4, C17 |     4 | 10µF ±10%, 6.3V X5R ceramic capacitors (1206) TDK C3216X5R0J106KT or Taiyo Yuden JMK316BJ106KL  |
| C5, C7          |     2 | 1000pF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H102KT or Taiyo Yuden UMK107CG102KZ |
| C6              |     1 | 680pF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H681KT or Taiyo Yuden UMK107CG681KZ   |
| C8              |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0603) TDK C1608X7R1C104KT or Taiyo Yuden EMK107BJ104KA   |

## MXI

- ♦

<!-- image -->

Features

- Triple-Output Power Supply 3.3V VI/O Peripheral Output 1.1V VCORE µP Core Output 1.8V, 2.5V, or 3.3V Selectable VMEM Memory Output
- ♦ Internal Switches
- ♦ 1MHz Pulse-Width Modulation (PWM) Switching
- ♦ Adjustable Dead/Low-Battery Settings
- ♦ 900mA Available from the VI/O Output
- ♦ 800mA Available from the VMEM Output
- ♦ 400mA Available from the VCORE Output
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE          |
|--------------|--------------|---------------------|
| MAX1702EVKIT | 0°C TO +70°C | 36 QFN (6mm × 6 mm) |

## Component List

| DESIGNATION        |   QTY | DESCRIPTION                                                                                  |
|--------------------|-------|----------------------------------------------------------------------------------------------|
| C9                 |     0 | Not installed, capacitor (1210)                                                              |
| C10, C12, C14      |     3 | 1.0µF ±10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105K                             |
| C11, C13, C15, C16 |     0 | Not installed, capacitors (0603)                                                             |
| C18, C19, C20      |     3 | 33pF ±5%, 50V COG ceramic capacitors (0603) TDK C1608COG1H330JT or Taiyo Yuden UMK107CG330JZ |
| JU1                |     1 | 3-pin header                                                                                 |
| JU2                |     1 | 4-pin header                                                                                 |
| L1, L3             |     2 | 4.7µH, 1.32A inductors Sumida CDRH4D28-4R7                                                   |
| L2                 |     1 | 4.7µH, 900mA inductor Sumida CDRH3D16-4R7NC                                                  |
| R1                 |     1 | 267k Ω ± 1% resistor (0603)                                                                  |
| R2                 |     1 | 90.9k Ω ± 1% resistor (0603)                                                                 |
| R3                 |     1 | 137k Ω ± 1% resistor (0603)                                                                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX1702 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                         |
|---------------|-------|-------------------------------------|
| R4            |     1 | 33k Ω ± 5% resistor (0603)          |
| R5            |     1 | 8.06k Ω ± 1% resistor (0603)        |
| R6            |     1 | 14k Ω ± 1% resistor (0603)          |
| R7            |     1 | 18k Ω ± 5% resistor (0603)          |
| R8            |     1 | 22k Ω ± 5% resistor (0603)          |
| R9-R12        |     4 | 100k Ω ± 5% resistors (0603)        |
| R13           |     1 | 1 Ω ± 5% resistor (0603)            |
| SW1           |     1 | Momentary contact switch            |
| U1            |     1 | MAX1702BEGX (36-pin QFN, 6mm x 6mm) |
| -             |     2 | Shunts (JU1, JU2)                   |
| -             |     1 | MAX1702 PC board                    |
| -             |     1 | MAX1702B data sheet                 |
| -             |     1 | MAX1702 EV kit data sheet           |

## Quick Start

The MAX1702 EV kit is a fully assembled and tested surface-mount board. Follow the steps below for board operation. Do not turn on the power supply until all connections are completed:

- 1) Verify that a shunt is across pins 1 and 2 of jumper JU1 (ON2).
- 2) Verify that a shunt is across pins 1 and 3 of jumper JU3 (PGM3).
- 3) Connect a voltmeter across the VI/O pad and IGND pad to monitor the VI/O output voltage.
- 4) Connect a voltmeter across the VCORE pad and CGND pad to monitor the VCORE output voltage.
- 5) Connect a voltmeter across the VMEM pad and MGND pad to monitor the VMEM output voltage.
- 6) Connect the positive terminal of a 4.5V supply to the VIN pad. Connect the negative terminal to the GND pad.
- 7) Turn on the power supply and verify that the VI/O output is at 3.3V, VCORE output is at 1.1V, and VMEM output is at 2.5V.
- 8) Use a voltmeter to verify that LBO , OUTOK, and RSO are at 3.3V and REF is at 1.25V.

## Detailed Description

The MAX1702 EV kit is a fully assembled and tested surface-mount circuit board that demonstrates the capability of the MAX1702B triple-output step-down DC-DC converter optimized for microprocessor-based applications. The MAX1702B integrates three high-performance, 1MHz PWM switching, step-down DC-DC power supplies. These power supplies can be used to power the microprocessor, memory, and I/O peripherals  in  a  single  system.  The  microprocessor VCORE supply is configured for 1.1V and provides up to 400mA. The memory VMEM supply is configurable to 1.8V, 2.5V, or 3.3V and provides up to 800mA. The I/O peripheral VI/O supply is configured for 3.3V and provides up to 900mA. The VPLL output is a filtered output from VCORE that can be used to supply noise-sensitive circuitry such as a phase-lock loop.

The EV kit input voltage range is 2.6V to 5.5V and requires up to 2A of current from the source with all outputs fully loaded.

## Input Source

The MAX1702 EV kit has a 2.6V to 5.5V input voltage range that allows the use of batteries or a regulated DC power supply as the power source. However, the EV kit requires a minimum of 3.6V at the input for the VI/O output supply to regulate to 3.3V ±2%. If the input voltage falls below 3.6V, VI/O tracks the input voltage. If VMEM is configured to regulate at 3.3V, it also tracks the input voltage below 3.6V.

## Input Thresholds

The MAX1702B contains two low-battery detection thresholds, dead battery (DBI) and low-battery (LBI), that are used to monitor the input power source to the EV kit. These thresholds are programmable with external resistors. The DBI threshold is set to 2.7V and the

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| Sumida      | 847-545-6700 | 847-545-6720 | www.sumida.com        |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Please indicate that you are using the MAX1702 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 1. VMEM Output Settings (JU2)

| SHUNT STATUS   | PIN CONNECTION        |   VMEM OUTPUT (V) |
|----------------|-----------------------|-------------------|
| 1 and 2        | PGM3 connected to VIN |               3.3 |
| 1 and 3        | PGM3 connected to REF |               2.5 |
| 1 and 4        | PGM3 connected to GND |               1.8 |

LBI threshold is set to 3.6V with resistors R1, R2, and R3. If the input source falls below the LBI threshold, the low-battery LBO output is pulled low. The EV kit enters shutdown mode when the input source falls below the DBI threshold. Replace resistors R1, R2, and R3 with different values to reconfigure the DBI and LBI thresholds. Refer to the MAX1702B data sheet to select new resistor values for R1, R2, and R3.

## Power-Up Sequence

The MAX1702 EV kit power-up sequence is initiated when the input voltage is greater than the dead-battery setting (DBI) and greater than the UVLO threshold (2.4V). During initial power-up, VI/O first ramps up in a soft-start  mode. Once VI/O reaches its regulation voltage, VMEM ramps to its target in soft-start mode. Finally,  once VMEM reaches its regulation voltage, VCORE ramps to its target in soft-start mode. The reset output RSO is  held  low  during  this  time.  Once  the VCORE output has reached its target voltage, a 65.5ms reset timer is started. RSO is pulled high when the timer expires. The timer may be manually reset by pushing the momentary switch SW1 or by applying a logic-low signal at the MR pad. The outputs stay on during the manual reset.

## Triple Outputs

The MAX1702 EV kit features three (VCORE, VMEM, and VI/O) step-down DC-DC converters that can be set to  regulate  to  different  voltages.  VCORE can supply 400mA at an output voltage of 1.1V. The VCORE output voltage is set with resistors R5 and R6. Refer to the Setting the Output Voltages section in the MAX1702B

<!-- image -->

## MAX1702 Evaluation Kit

Table 2. Normal/Sleep Mode (JU1)

| SHUNT STATUS   | PIN CONNECTION                       | EV KIT OPERATION                                          |
|----------------|--------------------------------------|-----------------------------------------------------------|
| 1 and 2        | ON2 connected to VIN                 | Normal mode                                               |
| 2 and 3        | ON2 connected to GND                 | Sleep mode (VCORE disabled, VI/O and VMEM remain enabled) |
| None           | ON2 connected to external controller | External controller determines operation mode             |

data sheet for instructions on selecting resistors R5 and R6. VMEM can supply 800mA at an output voltage of 3.3V, 2.5V, or 1.8V and can be set by configuring JU2. See Table 1 for JU2 configuration. VI/O output voltage is fixed to 3.3V and can supply 900mA.

## SLEEP Mode

The EV kit contains a 3-pin jumper (JU1) that can be used to enable the MAX1702B in normal mode or to place it  in  sleep  mode.  In  normal  operation,  the  three converters are enabled. In sleep mode, VCORE is in shutdown while VI/O and VMEM remain enabled. Sleep mode allows the microprocessor to enter sleep mode while memory and I/O peripherals are kept alive in a system application. See Table 2 for JU1 configuration. Normal and sleep modes can also be controlled with an external device by removing the shunt on JU1 and applying a CMOS logic-level signal to the ON2 pad.

## OUTOK Output

The MAX1702 EV kit provides an OUTOK logic output signal to indicate the regulation state of VCORE. A logic low at the OUTOK pad indicates that the VCORE output has dropped to 92.5% of its regulation voltage. A logic high at OUTOK indicates that VCORE is 95.5% of its regulation voltage.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1702 Evaluation Kit

Figure 1. MAX1702 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX1702 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX1702 Evaluation Kit

Figure 3. MAX1702 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1702 EV Kit PC Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

5