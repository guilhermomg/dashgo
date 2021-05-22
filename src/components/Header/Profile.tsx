import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Guilhermo González</Text>
          <Text color="gray.300" fontSize="small">
            guilhermomg@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Guilhermo González" src="https://github.com/guilhermomg.png" />
    </Flex>

  )
}