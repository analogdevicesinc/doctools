<!-- lastmod 2022-08-04 -->
## MAX20087 Evaluation Kit

## General Description

The MAX20087 evaluation kit (EV kit) demonstrates the full capabilities of the series of power-protector ICs. The EV kit can operate as a stand-alone protector, or can be connected  to  a  controller  through  an  I 2 C  interface  for advanced control and diagnostics. The IC populated by default  on  the  EV  kit  is  the  MAX20087,  which  has  four output channels and a full suite of diagnostics active for compatibility with ASIL-grade applications. The EV kit is compatible with all other variants in the series, which can be  evaluated  by  replacing  the  existing  IC  (U1)  with  the desired one.

The  EV  kit  allows  for  simultaneous  and  independent operation and evaluation of the four protected output power channels. The EV kit has built-in interfaces to operate the part  without  needing  an  external  I 2 C  controller,  although one  can  be  connected  to  evaluate  digital  control  and expanded diagnostics.

## Benefits and Features

- 400mΩ (typ) Input-to-Output Channel Resistance
- Automatic Shutdown and Retry on Output UV and OC Conditions Reduces IC Power Dissipation
- Channels Continuously Shut Off During Overvoltage Conditions to Protect the Rest of the System
- Capable of Basic Stand-Alone Operation or Advanced Control and Diagnostics Through I 2 C Interface
- Proven PCB Layout
- Fully Assembled and Tested

Evaluates: MAX20086-MAX20089

## Quick Start

## Required Equipment

- 3.3V power supply
- 12V power supply
- 0.5A, 25Ω electronic resistive load
- Digital multimeter (DMM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Connect the 3.3V supply across the VEXT and GND test loops.
- 2) Place jumper on the header next to VEXT test loop, connecting the center pin to the EXT pin.
- 3) Activate the 3.3V supply.
- 4) Connect the 12V supply across the VIN and GND test loops. Activate supply.
- 5) Use the DMM to verify that OUT1-OUT4 are off (0V).
- 6) Install a jumper on EN to pull pin to 3.3V supply.
- 7) Use the DMM to verify that OUT1-OUT4 are at 12V.
- 8) Connect the 0.5A load across GND and an output channel.
- 9) Use the DMM to verify that voltage on channel is approximately 11.8V.

Ordering Information appears at end of data sheet.

<!-- image -->

## Detailed Description of Hardware

The MAX20086-MAX20089 ICs are multichannel power protectors  designed  for  power-over-coax  applications. The  MAX20086/MAX20087  have  four  output  channels, and  the  MAX20088/MAX20089  have  two  output  channels. The MAX20086 and MAX20088 are standard ICs, while  the  MAX20087  and  MAX20089  have  advanced functionality  for  ASIL-rated  applications.  By  default,  the EV kit  comes  with  the  MAX20087  IC  populated  so  that the full feature set of the IC family can be evaluated with one kit.

The IC takes in a single input power channel and feeds it through to multiple output channels. Each output channel has independent diagnosis/protection from undervoltage, overvoltage,  overcurrent,  and  overtemperature  conditions. The input channel and logic supplies are also monitored  for  undervoltage  and  overvoltage  conditions.  All output channels have soft-start and soft-shutdown ramp behavior to limit inrush current and avoid inductive ringing when used in power-over-coax applications.

The IC can operate in  stand-alone  mode,  with  a  single enable input controlling all channels simultaneously and a single interrupt output communicating the presence of any fault conditions. The ICs also feature an I 2 C interface for  advanced  control  and  diagnosis. Through  the  digital interface, users can exert individual channel enable/disable  control  and  determine  specific  fault  types,  and  on which channel the fault was asserted. Additionally, each IC contains an on-board ADC to make system measure -ments.  Standard  ICs  can  measure  output  channel  currents, while ASIL-compliant ICs can also measure output channel  voltages,  input  and  logic  supply  voltages,  and current-set resistor voltage.

## EV Kit Interface

## Supply

The EV kit requires a main power supply as a source for the  four  output  channels  and  a  small  secondary  supply for the IC's internal logic and control interface. The main supply can range from 3V to 15V, while the logic supply should fall between 3V and 5V. Apply the main supply at the test points labelled VIN and GND, and the logic supply at the test points labelled VEXT and GND.

## Control

Stand-alone control can be exerted by simply placing or removing the EN jumper (or applying a logic-high signal to the EN test point). Adding the jumper activates all the output channels, and removing it shuts them down. The current  limit  is  set  by  a  single  resistor  on  the  ISET  pin. The 600mA (max) current limit is set with a 100kΩ resis -tor;  the  limit  scales  linearly  down  to  12kΩ  (72mA).  The recommended minimum current limit is 16.5kΩ at 100mA.

The INT pin is open-drain active-low, and asserts whenever a fault occurs or when a triggered ADC conversion has completed (a pullup resistor for the INT pin is populated on the EV kit). By default, the pin shows real-time faults and deactivates when fault conditions are removed. The  pin  can  be  reconfigured  to  assert  a  fault  until  the diagnostic flags are read through I 2 C. Likewise, different fault types can be masked off the INT pin and register. By default, all fault conditions assert the INT pin.

The I 2 C address of the IC can be configured at the factory to  be  one  of  several  addresses. Additionally,  the ADDR pin  of  the  IC  sets  one  bit  in  the  address.  There  is  an internal pulldown on the pin to default the address to 0x28 (default-factory address); populating the ADDR jumper to pull the pin high sets the address to 0x29. The EV kit has pullup resistors on the I 2 C lines. Note that the addresses '0x28'  and  '0x29'  do  not  include  the  read/write  bit  that the I 2 C protocol requires. Refer to the MAX20087 IC data sheet for a full description of the I 2 C interface and available control/diagnostic registers.

## Power Channels

The main power supply has a 4.7µF capacitor connected to handle transient currents and noise. In a proper application,  the  supply  comes  from  an  upstream  converter that  has  noticeable  output  capacitance  of  its  own.  That capacitance  does  not  eliminate  the  need  to  have  local capacitance for the protector, especially if there is noticeable impedance between the converter and the protector. There are four output channels for the IC populated by default and each have a 1µF capacitor for transient suppression.  The  EV  kit  does  not  innately  support  adding GMSL filters  to  emulate  a  power-over-coax  application, but can be modified to allow for one. Such filtering can also be added externally.

Stand-alone  control  causes  all  outputs  to  enable/disable simultaneously,  while  individual  channel  control  can  be exerted over I 2 C. Each channel has its own detectors for overvoltage, undervoltage, overcurrent, and overtemperature conditions. Inducing a fault on one channel causes that channel to turn off, leaving the other channels operating.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20087EVKIT# | EV Kit |

# Denotes RoHS compliant.

Faults can be manually applied to the EV kit, such as shorting an output to ground, connecting an output to a higher voltage than the input, and more. In addition to the main output-channel test loops, there are also smaller test points for sensing the output-channel voltage directly at the output capacitor,  which  are  labelled  'OUT#S'  (where  '#'  is  the output channel number).

## EV Kit Layout

The EV kit's layout is a good example to use as a basis for application design. All power traces are routed on the top layer, with a full, solid ground plane on the layer directly beneath.  Open  spaces  are  filled  with  ground,  and  both the ground pour and all the components are connected directly  to  the  ground  plane  with  multiple  stitching  vias to reduce impedance. Capacitors are located very close to the IC. The exposed pad (EP) of the IC is connected to  ground,  and  multiple  vias  in  the  EP  pad  connect  to additional ground planes of the board for maximum heat dissipation.

## MAX20087 EV Kit Bill of Materials

| QTY   | REFERENCE DESIGNATOR                             | DESCRIPTION                             | MFG. PART NUMBER         |
|-------|--------------------------------------------------|-----------------------------------------|--------------------------|
| 3     | ADDR, EN, V_LOGIC                                | pin header (cut to fit)                 | TE 4-103327-0            |
| 4     | C1-C4                                            | 1uF ceramic cap, 100V, X7S, 0805        | TDK CGA4J3X7S2A105K125AB |
| 1     | C5                                               | 0.1uF ceramic cap, 50V, X7R, 0402       | TDK CGA2B3X7R1H104K      |
| 1     | C6                                               | 1uF ceramic cap, 16V, X7R, 0603         | TDK CGA3E1X7R1C105K080AC |
| 1     | C7                                               | 4.7uF ceramic cap, 35V, X7R, 0805       | TDK CGA4J1X7R1V475M125AE |
| 11    | EN, INT, ISET, OUT1S-OUT4S, PGND, SCL, SDA, VEXT | test point, yellow, 0.040" drill        | Keystone 5014 or similar |
| 6     | OUT1-OUT4, PGND, VIN                             | wire loop, 18AWG solid                  | N/A                      |
| 1     | R1                                               | 100kohm resistor, 1%, 0402              | any                      |
| 3     | R2,R3,R4                                         | 4.99kohm resistor, 1%, 0603             | any                      |
| 1     | U1 (A/B)                                         | MAX20087 quad power protector           | Maxim M AX20087ATPA/VY + |
| 1     | X1                                               | 2x10-pin connector, female, right-angle | Samtec SSW-110-02-S-D-RA |
| -     | -                                                | PCB: MAX20087 EVKIT                     | MAX20087EVKIT#           |

│

## MAX20087 EV Kit Schematic

<!-- image -->

│

## MAX20087 EV Kit PCB Layouts

MAX20087 EV Kit Component Placement Guide-Top Copper and Silkscreen

<!-- image -->

MAX20087 EV Kit PCB Layout-Inner Layer 3  (Copper)

<!-- image -->

MAX20087 EV Kit PCB Layout-Inner Layer 2 (Copper)

<!-- image -->

MAX20087 EV Kit PCB Layout-Bottom Copper

<!-- image -->

│

## MAX20087 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

Evaluates: MAX20086-MAX20089