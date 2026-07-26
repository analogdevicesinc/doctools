<!-- lastmod 2022-08-03 -->
## General Description

The DS2731 evaluation kit (EV kit) demonstrates all the features of the DS2731 battery-backup power-management IC. The EV kit includes an assembled and tested PCB for easy connection to power sources and a load. Three power sources-a 3.3V auxiliary supply, a  12V  supply,  and  a  single  lithium-ion  (Li+)  batteryconnect to the DS2731 EV kit to supply the high-efficiency, synchronous buck regulator and battery charger. The IC automatically selects the best-qualified  power source for the buck regulator. Thresholds for  low-battery voltage, charge regulation voltage and current,  charge  safety  timer,  and  buck-output  voltage are set by resistors.

| DESIGNATION   |   QTY | DESCRIPTION                 |
|---------------|-------|-----------------------------|
| C1, C7        |     2 | 10µF ceramic SMT capacitors |
| C2, C3, C6    |     3 | 47µF ceramic SMT capacitors |
| C4, C5        |     2 | 22µF ceramic SMT capacitors |
| G             |     1 | Green LED L62305CT          |
| JP1           |     1 | No power                    |
| JP2           |     1 | 0 resistor (0603)           |
| L1            |     1 | 2.2µH power inductor        |
| L2            |     1 | 6.8µH power inductor        |
| R             |     1 | Red LED L62301CT            |
| R1            |     1 | 56.2k resistor (0603)       |
| R2            |     1 | 10.2k resistor (0603)       |
| R3            |     1 | 590k resistor (0603)        |

<!-- image -->

## DS2731 Evaluation Kit

Features

- ♦ Convenient Power Source and Load Connections
- ♦ LEDs Indicate Charge Status
- ♦ Automatic Power-Source Selection
- ♦ Space for a Wide Variety of Inductor Sizes
- ♦ Proven, Compact and Low-Cost PCB Layout
- ♦ Fully Assembled

## Ordering Information

| PART         | TYPE   |
|--------------|--------|
| DS2731EVKIT+ | EV Kit |

## Component List

| DESIGNATION          |   QTY | DESCRIPTION                                                   |
|----------------------|-------|---------------------------------------------------------------|
| R4                   |     1 | 240k resistor (0603)                                          |
| R5                   |     1 | 360k resistor (0603)                                          |
| R6, R7, R8, R11, R12 |     5 | 4.7k resistor (0603)                                          |
| R9                   |     1 | 0.05k resistor (1206)                                         |
| R13                  |     1 | 2.49k resistor (0603)                                         |
| THM1                 |     1 | 103AT-2 thermistor                                            |
| U1                   |     1 | Cache-memory battery-backup management IC (28 TSSOP) DS2731E+ |
| Y                    |     1 | Yellow LED L62307CT                                           |
| -                    |     1 | PCB: DS2731 Evaluation Kit+                                   |

1

## DS2731 Evaluation Kit

## Quick Start Sequence

## Required Equipment

Before beginning, the following equipment is needed:

- DS2731 EV Kit Board
- +12V Power Supply
- +3.3V Power Supply
- +4.2V Li+ Battery
- Voltmeter
- Connecting Wires

## Optional Equipment

The following equipment is recommended but not required:

- Programmable Load (150mA at +1.7V typical)
- Source/Sink Power Supply

## Board Connections

- 1) Connect a +4.2V source/sink supply or a Li+ battery between BAT+ and BAT-.
- 2) Connect a +12V supply between VIN and CGND.
- 3) Connect a +3.3V supply between AUX and CGND.
- 4) Connect a load between MEM+ and MEM- (optionally connect a voltage meter).
- 5) Verify  the  regulator  output  at  MEM+/MEM-, which should be close to +1.8V with no load.

Caution: Always observe proper ESD precautions when handling the DS2731 EV kit circuit board.

## Supply Connections

A valid +12V and +3.3V supply are required for the charger circuitry to function. The charge current is drawn directly from the +12V supply. The majority of the device logic and the buck regulator are powered off the +3.3V auxiliary supply. These supplies share a common ground at CGND.

## Battery Connection

Connect a +4.2V Li+ cell between BAT+ and BAT-. A source/sink supply can be used for board evaluation purposes.

Figure 1. Quick Start Connection Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Board Configuration

## Charger/Buck Regulator Enables ( ENS , ENC)

The charger circuitry can be disabled by removing the 0 Ω resistor on JP2. The board is shipped with the 0 Ω resistor in place (charger enabled).

Similarly, the buck regulator can be disabled by pulling ENS high through a 0 Ω resistor  on  JP1.  The  board  is shipped without the 0 Ω resistor in place (buck regulator enabled).

## Setting Charge Parameters

## Constant Current (CC)

Current is regulated based on the voltage drop across an external 50m Ω sense resistor and an internal feedback circuit. The CC charge rate, ICHARGE, is set at the RSET pin. It can be calculated by the following formula:

<!-- formula-not-decoded -->

where R is the value of the resistor connected to RSET. The charge current can range from 0.5A to 1.5A. The board is shipped with ICHARGE = 1.00A.

## DS2731 Evaluation Kit

## Constant Voltage (CV)

When the battery voltage reaches the CV output threshold,  CV mode is entered. The charger stops regulating current and begins regulating voltage. The MARGIN pin sets the CV threshold according to the following formula:

<!-- formula-not-decoded -->

where R2 is the resistor between STMR and MARGIN, and R1 is the resistor between MARGIN and ground. Voltage regulation can be set from +3.8V to +4.6V. The board is shipped with VPK = +4.21V.

## SMTR

The charger has a safety timer that sets the maximum length of time for a charge cycle. It is programmable from 1hr to 10hr.

Timing Equation:

<!-- formula-not-decoded -->

The board is shipped with t = 10,936s = 3.04hr. If this timer expires and the battery fails to reach the termination  current,  the  charger  enters  the  fault  state  and  is latched off. Charging does not continue until either the

<!-- image -->

Figure 2. Li+ Charge Cycle

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## DS2731 Evaluation Kit

power is cycled or the ENC pin is strobed low and then returns high. The timer does not start until CC mode is entered and continues through CV mode; precharge mode is not included in the STMR.

## Buck Regulator

## Regulation Voltage

The buck regulator output voltage can range from +0.9V to +2.5V and is set by the following formula:

<!-- formula-not-decoded -->

The board is shipped with VREG = +1.8V.

## Low-Battery Shutdown

The supply powering the buck regulator is the auxiliary supply as long as it is &gt; 2.93V. If the voltage of the auxiliary supply drops below 2.93V, the DS2731 automatically switches power to the Li+ battery.

The IC transitions to a quiescent-power mode should the Li+ battery reach empty before the system power is restored. In this mode, all circuitry is shut off and does not turn on again until the VCBIAS voltage is stable and UVLO-REG is off. The low-battery voltage set point can be determined by the following formula:

VLO\_BATT x 4.5 = low-battery voltage set point

The board is shipped with the low-battery voltage set point = +2.76V.

## Board Operation

## Charger

The features of the charge circuitry can be easily demonstrated when a source/sink supply is connected between BAT+ and BAT-. With the +12V and +3.3V supplies connected and on, lower the source/sink supply's voltage below +4.0V (make sure the current limit of the supply is set above the charge current ICHARGE). The yellow LED should turn on. If the source/sink supply has a current meter display, it should read approximately equal to ICHARGE. Lower the source/sink supply voltage below VMIN and there is a reduction in the charge current. Increase the source/sink supply voltage above VPK, the constant voltage set point, and observe the green LED turn on.

Heat the IC up to &gt; +160°C. Above +100°C, the IC begins to choke the charge current 133mA/°C. Once the die temperature exceeds +160°C, the charge current shuts off completely.

## Buck Regulator

With the +12V and +3.3V supplies and the Li+ battery connected, the voltage reading between MEM+ and MEM- should be approximately +1.8V. If a programmable load is being used, set the load current to 150mA. The user should be able to observe the current being drawn from the +3.3V auxiliary supply. Power down the +12V and +3.3V supplies and observe that the buck regulator is still running. Power up the +12V and +3.3V supplies again and operation of the buck regulator should remain constant during the switchovers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## DS2731 Evaluation Kit

<!-- image -->

Figure 3. DS2731 EV Kit Board Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## DS2731 Evaluation Kit

Figure 4. DS2731 EV Kit Board-Top View

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## DS2731 Evaluation Kit

<!-- image -->

Figure 5. DS2731 EV Kit Board-Middle Layer

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## DS2731 Evaluation Kit

Figure 6. DS2731 EV Kit Board-Bottom Layer

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## DS2731 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                              | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------------------|-----------------|
|                 0 | 1/09            | Initial release.                                                                         | -               |
|                 1 | 10/09           | Changed the part number in the Ordering Informatio n table from DS2731K to DS2731EVKIT+. | 1               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

9