import { Regions } from "../contexts/AppState";

const LOREM: string =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et imperdiet lectus. Maecenas euismod nunc in odio consectetur, vitae lobortis enim congue. Sed nec ex bibendum, efficitur dolor id, efficitur eros. Suspendisse dictum lorem in elementum consectetur. Sed tincidunt posuere malesuada. Quisque auctor quam consequat est sollicitudin, quis consequat sapien placerat. Donec eu tristique ex. Fusce ac magna ultrices, ultricies sapien eu, fermentum tellus. Curabitur posuere magna non hendrerit blandit. Proin aliquet accumsan metus, tempor finibus nisi luctus ac. Donec ac cursus nisl. Quisque commodo magna a tempus blandit. Ut ornare finibus ante, ut dapibus ligula interdum non. Suspendisse enim metus, pretium vehicula pharetra sit amet, efficitur sed arcu. Praesent tempor nisl non luctus fermentum. Vestibulum suscipit tristique justo, vitae molestie ex feugiat eget. Praesent varius arcu lectus, vel viverra tellus cursus a. Sed quam magna, mattis et odio ut, dignissim vehicula quam. Donec vel tellus et sapien eleifend efficitur. Maecenas ligula purus, aliquam a risus ac, eleifend commodo ante. Nullam a quam sed mi lacinia venenatis eu nec sem. Donec cursus nunc id tincidunt egestas. Nunc ac pharetra magna. Cras scelerisque consectetur diam, sit amet tincidunt nisl hendrerit eu. Aliquam faucibus interdum condimentum. Fusce ullamcorper nunc nulla, eu pulvinar sem consequat at. Suspendisse non purus sodales, vestibulum tortor a, egestas metus. Nam euismod dignissim risus, eget bibendum quam pretium vitae. In hac habitasse platea dictumst. Nam vestibulum ac dui ornare fermentum. Ut tincidunt lacus sapien, at suscipit est laoreet vitae. Quisque in metus mattis nulla interdum bibendum. Nam sed augue nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque id accumsan dolor, id sollicitudin risus. Suspendisse iaculis gravida dolor. Phasellus eleifend ex a convallis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae justo dui. Nam eget augue in augue scelerisque.";


const available_regions: Regions[] = [
  { nameserver: "us-east-1", displayName: "US-EAST-1" },
  { nameserver: "us-central-2", displayName: "US-CENTRAL-2" },
  { nameserver: "jp-tokyo-1", displayName: "JAPAN" },
  { nameserver: "eu-netherlands-1", displayName: "NETHERLANDS" },
];
export { LOREM, available_regions };
